import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { AddUserPlaceDto } from './dto/add-user-place.dto';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}
  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }

  @Post('/place')
  createUserPlace(@Body() body: AddUserPlaceDto) {
    return this.usersService.addUserPlace(body);
  }

  @Get()
  getAllUser() {
    return this.usersService.getAllUsers();
  }

  /* TODO: Remove get username by id */
  @Get('/name/:id')
  getUserNameById(@Param('id') id) {
    return this.usersService.getUserNameById(id);
  }
}
