import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Weather } from './weather.model';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService],
  imports: [SequelizeModule.forFeature([Weather]), HttpModule],
})
export class WeatherModule {}
