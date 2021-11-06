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

export interface IYandexWeatherPart {
  part_name: string;
  temp_avg: number;
  feels_like: number;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  wind_speed: number;
  wind_dir: string;
}
