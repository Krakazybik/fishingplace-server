import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { UserPlace } from '../user/user-places.model';

interface PlaceCreationAttrs {
  lng: number;
  lat: number;
  description: string;
}

@Table({ tableName: 'places' })
export class Place extends Model<Place, PlaceCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  lng: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  lat: number;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserPlace)
  users: User[];
}
