import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Place } from './place.model';
import { CreatePlaceDto } from './dto/create-place.dto';
import { WeatherService } from '../weather/weather.service';
import { map } from 'rxjs';
import { PlaceWeather } from './places-weather.model';
import { Op } from 'sequelize';
import { IWeatherPart } from './dto/create-place-weather.dto';
import { MS_IN_DAY } from 'src/shared/consts';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place) private placeRepository: typeof Place,
    @InjectModel(PlaceWeather)
    private placeWeatherRepository: typeof PlaceWeather,
    private weatherService: WeatherService,
  ) {}

  async createPlace(dto: CreatePlaceDto) {
    return this.placeRepository.create(dto);
  }

  async getPlaceById(placeId: number) {
    return this.placeRepository.findByPk(placeId);
  }

  async getPlaceWeatherById(placeId: number) {
    const actualWeather = await this.placeWeatherRepository.findAll({
      where: {
        placeId: placeId,
        updatedAt: { [Op.gt]: new Date(Date.now() - MS_IN_DAY) },
      },
    });

    if (actualWeather.length) return actualWeather;

    const place = await this.placeRepository.findByPk(placeId);
    if (place) {
      const newWeather = await this.weatherService
        .getYandexFreeWeatherAt(place.lng, place.lat)
        .pipe(
          map((response) => ({
            parts: response.data.forecast.parts.map(
              (item): IWeatherPart => ({
                name: item.part_name,
                temp: item.temp_avg,
                humidity: item.humidity,
                pressure_mm: item.pressure_mm,
                pressure_pa: item.pressure_pa,
                feels_like: item.feels_like,
                wind_speed: item.wind_speed,
                wind_dir: item.wind_dir,
              }),
            ),
            temp: response.data.fact.temp,
            wind_speed: response.data.fact.wind_speed,
            wind_dir: response.data.fact.wind_dir,
            wind_gust: response.data.fact.wind_gust,
            feels_like: response.data.fact.feels_like,
            pressure_pa: response.data.fact.pressure_pa,
            pressure_mm: response.data.fact.pressure_mm,
            humidity: response.data.fact.humidity,
          })),
        );

      newWeather.subscribe((weather) => {
        this.placeWeatherRepository.create({
          ...weather,
          placeId: Number(placeId),
        });
      });

      return newWeather;
    }

    throw new HttpException(
      `Place with id: ${placeId} Not found`,
      HttpStatus.NOT_FOUND,
    );
  }
}
