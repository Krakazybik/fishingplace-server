import { Module } from '@nestjs/common';
import { AchievementsService } from './achievements.service';
import { AchievementsController } from './achievements.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Achievement } from './achievements.model';

@Module({
  providers: [AchievementsService],
  controllers: [AchievementsController],
  imports: [SequelizeModule.forFeature([Achievement])],
})
export class AchievementsModule {}
