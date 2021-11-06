export interface IYandexWeatherFact {
  temp: number;
  feels_like: number;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
}

export interface IWeatherPart {
  name: string;
  temp: number;
  feels_like: number;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  wind_speed: number;
  wind_dir: string;
}
