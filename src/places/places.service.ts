import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Place } from './place.model';
import { CreatePlaceDto } from './dto/create-place.dto';

@Injectable()
export class PlacesService {
  constructor(@InjectModel(Place) private placeRepository: typeof Place) {}

  async createPlace(dto: CreatePlaceDto) {
    return this.placeRepository.create(dto);
  }

  async getPlaceById(placeId: number) {
    return this.placeRepository.findByPk(placeId);
  }
}
