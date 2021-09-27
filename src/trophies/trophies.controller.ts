import { Controller, Get } from '@nestjs/common';
import { TrophiesService } from './trophies.service';

@Controller('trophies')
export class TrophiesController {
  constructor(private trophiesService: TrophiesService) {}

  @Get()
  getAllTrophies() {
    return this.trophiesService.getAllTrophies();
  }
}
