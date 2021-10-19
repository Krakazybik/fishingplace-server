import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { PlacesService } from '../places/places.service';
import { AddUserPlaceDto } from './dto/add-user-place.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private placeService: PlacesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    return await this.userRepository.create(dto);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findByPk(id);
    if (user) return user;
    throw new HttpException(
      `User with id: ${id} Not found`,
      HttpStatus.NOT_FOUND,
    );
  }

  async getUserNameById(id: number) {
    const user = await this.userRepository.findByPk(id);
    if (user) return user.username;
    throw new HttpException(
      `User with id: ${id} Not found`,
      HttpStatus.NOT_FOUND,
    );
  }

  async addUserPlace({ userId, placeId }: AddUserPlaceDto) {
    const user = await this.userRepository.findByPk(userId);
    const place = await this.placeService.getPlaceById(placeId);
    if (user && place) {
      await user.$add('places', place.id);
      return placeId;
    }
    throw new HttpException('User or Place not found', HttpStatus.NOT_FOUND);
  }
}
