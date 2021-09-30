import { Column, DataType, Model, Table } from 'sequelize-typescript';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface WeatherCreationAttrs {}

@Table({ tableName: 'weather' })
export class Weather extends Model<Weather, WeatherCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
}
