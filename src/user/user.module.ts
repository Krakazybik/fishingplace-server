import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { User } from './user.model';
import { UserService } from './user.service';
import { Place } from '../places/place.model';
import { PlacesModule } from '../places/places.module';
import { UserPlace } from './user-places.model';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Place, UserPlace]), PlacesModule],
})
export class UserModule {}
