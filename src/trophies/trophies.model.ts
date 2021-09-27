import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TrophyCreationAttrs {
  fishName: string;
  weight: number;
  date: string;
}

@Table({ tableName: 'trophies', updatedAt: false, createdAt: false })
export class Trophy extends Model<Trophy, TrophyCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  fishName: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  weight: number;

  @Column({ type: DataType.DATE, allowNull: false })
  date: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  approved: boolean;
}
