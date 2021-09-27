import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface GearCreationAttr {
  gear: string;
}
@Table({ tableName: 'gear', createdAt: false, updatedAt: false })
export class Gear extends Model<Gear, GearCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  gear: string;
}
