import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Trophy } from './trophies.model';
import { CreateTrophyDto } from './dto/create-trophy.dto';

@Injectable()
export class TrophiesService {
  constructor(@InjectModel(Trophy) private trophiesRepository: typeof Trophy) {}

  async createTrophy(dto: CreateTrophyDto) {
    return await this.trophiesRepository.create(dto);
  }

  async getAllTrophies() {
    return await this.trophiesRepository.findAll();
  }
}
