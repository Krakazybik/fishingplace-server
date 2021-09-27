import { Module } from '@nestjs/common';
import { TrophiesController } from './trophies.controller';
import { TrophiesService } from './trophies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Trophy } from './trophies.model';

@Module({
  controllers: [TrophiesController],
  providers: [TrophiesService],
  imports: [SequelizeModule.forFeature([Trophy])],
})
export class TrophiesModule {}
