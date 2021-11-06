import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { YANDEX_WEATHER_FREE_BASEURL } from './weather.api';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { IWeatherPart, IYandexWeatherFact } from 'src/shared/types';

export interface IYandexWeatherResponse {
  now: number;
  fact: IYandexWeatherFact;
  forecast: {
    parts: Array<IWeatherPart>;
  };
}

@Injectable()
export class WeatherService {
  constructor(private httpService: HttpService) {}

  getYandexFreeWeatherAt(
    lon: number,
    lat: number,
    lang = 'en_US',
  ): Observable<AxiosResponse<IYandexWeatherResponse>> {
    return this.getYandexWeatherAt(YANDEX_WEATHER_FREE_BASEURL, lon, lat, lang);
  }

  getYandexWeatherAt(
    baseURL: string,
    lon: number,
    lat: number,
    lang = 'en_US',
  ): Observable<AxiosResponse<IYandexWeatherResponse>> {
    return this.httpService.get(``, {
      baseURL,
      params: {
        lat,
        lon,
        lang,
      },
      headers: {
        'X-Yandex-API-Key': process.env.YANDEX_WEATHER_API_KEY,
      },
    });
  }
}
