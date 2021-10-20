import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'achievements' })
export class Achievement extends Model<Achievement> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, allowNull: false })
  icon: string;

  @Column({ type: DataType.STRING, allowNull: false })
  requirements: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  require: number;
}
