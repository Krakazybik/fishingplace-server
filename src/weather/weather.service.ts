import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { YANDEX_WEATHER_BASEURL } from './weather.api';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class WeatherService {
  constructor(private httpService: HttpService) {}

  getYandexWeatherAt(
    lng: number,
    lat: number,
    lang = 'en_US',
  ): Observable<AxiosResponse<any>> {
    return this.httpService.get(`forecast?lat=${lat}&lon=${lng}&lang=${lang}`, {
      baseURL: YANDEX_WEATHER_BASEURL,
      headers: {
        'X-Yandex-API-Key': process.env.YANDEX_WEATHER_API_KEY,
      },
    });
  }
}
