import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  @Get(':id')
  getPlaceById(@Param('id') placeId) {
    return this.placesService.getPlaceById(placeId);
  }

  @Post()
  createPlace(@Body() dto: CreatePlaceDto) {
    return this.placesService.createPlace(dto);
  }
}
