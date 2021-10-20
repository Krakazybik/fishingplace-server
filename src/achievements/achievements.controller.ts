import { Controller, Get } from '@nestjs/common';
import { AchievementsService } from './achievements.service';

@Controller('achievements')
export class AchievementsController {
  constructor(private achievementsService: AchievementsService) {}

  @Get()
  getAllAchievements() {
    return this.achievementsService.getAchievements();
  }
}
