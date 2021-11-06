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

export class CreatePlaceWeatherDto {
  private temp: number;
  private feels_like: number;
  private pressure_mm: number;
  private pressure_pa: number;
  private humidity: number;
  private wind_speed: number;
  private wind_gust: number;
  private wind_dir: string;
  private parts: Array<IWeatherPart>;
  private placeId: number;
}
