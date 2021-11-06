import { Controller, Get, Param, Query } from '@nestjs/common';
import { map } from 'rxjs';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}
  @Get('')
  getWeather(@Query('lng') lng: number, @Query('lat') lat: number) {
    return this.weatherService
      .getYandexFreeWeatherAt(lng, lat)
      .pipe(map((response) => response.data));
  }

  @Get('place/:id')
  getWeatherByPlaceId(@Param('id') palaceId) {
    return palaceId;
  }
}
