import { Controller, Get, Query } from '@nestjs/common';
import { map } from 'rxjs';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}
  @Get('')
  getWeather(@Query('lng') lng: number, @Query('lat') lat: number) {
    return this.weatherService
      .getYandexWeatherAt(lng, lat)
      .pipe(map((response) => response.data));
  }
}
