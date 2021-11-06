import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Place } from './place.model';
import { IWeatherPart } from './dto/create-place-weather.dto';

export interface IPlaceWeatherCreationAttrs {
  temp: number;
  feels_like: number;
  pressure_mm: number;
  pressure_pa: number;
  humidity: number;
  wind_speed: number;
  wind_gust: number;
  wind_dir: string;
  parts: Array<IWeatherPart>;
  placeId: number;
}

@Table({ tableName: 'places_weather' })
export class PlaceWeather extends Model<
  PlaceWeather,
  IPlaceWeatherCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  temp: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  feels_like: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  pressure_mm: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  pressure_pa: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  humidity: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  wind_speed: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  wind_gust: number;

  @Column({ type: DataType.STRING, allowNull: false })
  wind_dir: string;

  @Column({ type: DataType.ARRAY(DataType.JSON), allowNull: false })
  parts: Array<IWeatherPart>;

  @ForeignKey(() => Place)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  placeId: number;
}
