import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Gear } from './gear.model';
import { CreateGearDto } from './dto/create-gear.dto';

@Injectable()
export class GearService {
  constructor(@InjectModel(Gear) private gearRepository: typeof Gear) {}

  async createGear(dto: CreateGearDto) {
    return await this.gearRepository.create(dto);
  }

  async getAllGear() {
    return await this.gearRepository.findAll();
  }
}
