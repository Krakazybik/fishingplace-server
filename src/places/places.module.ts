import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Place } from './place.model';
import { User } from '../user/user.model';
import { UserPlace } from '../user/user-places.model';
import { WeatherModule } from '../weather/weather.module';
import { PlaceWeather } from './places-weather.model';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService],
  imports: [
    SequelizeModule.forFeature([Place, User, UserPlace, PlaceWeather]),
    WeatherModule,
  ],
  exports: [PlacesService],
})
export class PlacesModule {}
