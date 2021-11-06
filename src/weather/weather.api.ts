export interface IWeatherInfo {
  lat: number;
  lon: number;
  url: string;
}

export interface IWeatherFact {
  temp: number;
  feels_like: number;
  temp_water: number;
  icon: string;
  condition: string;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_nm: number;
  pressure_pa: number;
  humidity: number;
  daytime: string;
  polar: boolean;
  season: string;
  obs_time: number;
}

export interface IWeatherForecastPart {
  part_name: string;
  temp_min: number;
  temp_max: number;
  temp_avg: number;
  feels_like: number;
  icon: string;
  condition: string;
  daytime: string;
  polar: boolean;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  pressure_nm: number;
  pressure_pa: number;
  humidity: number;
  prec_mm: number;
  prec_period: number;
  prec_prob: number;
}

export interface IWeatherForecastMain {
  date: string;
  date_ts: number;
  week: number;
  sunrise: string;
  sunset: string;
  moon_code: number;
  moon_text: string;
  parts: Array<IWeatherForecastPart>;
}

export type IWeatherForecast = IWeatherForecastMain & IWeatherForecastPart;

export interface IWeatherResponse {
  now: number;
  now_dt: string;
  info: IWeatherInfo;
  fact: IWeatherFact;
  forecast: IWeatherForecast;
}

export const YANDEX_WEATHER_BASEURL =
  'https://api.weather.yandex.ru/v2/forecast';
export const YANDEX_WEATHER_FREE_BASEURL =
  'https://api.weather.yandex.ru/v2/informers';
