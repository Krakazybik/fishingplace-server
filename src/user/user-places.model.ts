import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Place } from '../places/place.model';

@Table({ tableName: 'user_places' })
export class UserPlace extends Model<UserPlace> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @ForeignKey(() => Place)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  placeId: number;
}
