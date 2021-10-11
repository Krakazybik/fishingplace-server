import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Place } from './place.model';
import { CreatePlaceDto } from './dto/create-place.dto';
import { WeatherService } from '../weather/weather.service';
import { map } from 'rxjs';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place) private placeRepository: typeof Place,
    private weatherService: WeatherService,
  ) {}

  async createPlace(dto: CreatePlaceDto) {
    return this.placeRepository.create(dto);
  }

  async getPlaceById(placeId: number) {
    return this.placeRepository.findByPk(placeId);
  }

  async getPlaceWeatherById(placeId: number) {
    const place = await this.placeRepository.findByPk(placeId);
    if (place) {
      return this.weatherService
        .getYandexWeatherAt(place.lng, place.lat)
        .pipe(map((response) => response.data));
    }
    throw new HttpException(
      `Place with id: ${placeId} Not found`,
      HttpStatus.NOT_FOUND,
    );
  }
}
