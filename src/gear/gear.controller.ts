import { Controller, Get, Post, Body } from '@nestjs/common';
import { GearService } from './gear.service';
import { CreateGearDto } from './dto/create-gear.dto';

@Controller('gear')
export class GearController {
  constructor(private gearService: GearService) {}

  @Get()
  async getAllGear() {
    return this.gearService.getAllGear();
  }

  @Post()
  async createGear(@Body() body: CreateGearDto) {
    return this.gearService.createGear(body);
  }
}
