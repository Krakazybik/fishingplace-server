import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Place } from 'src/places/place.model';
import { UserPlace } from './user-places.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  username: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @Column({ type: DataType.STRING })
  banReason: string;

  @BelongsToMany(() => Place, () => UserPlace)
  places: Place[];
}
