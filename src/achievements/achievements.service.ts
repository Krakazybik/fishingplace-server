import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Achievement } from './achievements.model';

@Injectable()
export class AchievementsService {
  constructor(
    @InjectModel(Achievement)
    private achievementsRepository: typeof Achievement,
  ) {}
  async getAchievements() {
    return this.achievementsRepository.findAll();
  }
}
