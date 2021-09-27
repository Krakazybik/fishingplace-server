import { Module } from '@nestjs/common';
import { GearController } from './gear.controller';
import { GearService } from './gear.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Gear } from './gear.model';

@Module({
  controllers: [GearController],
  providers: [GearService],
  imports: [SequelizeModule.forFeature([Gear])],
})
export class GearModule {}
