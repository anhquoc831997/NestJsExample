import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from 'src/user.dto';
import { UserService } from './user.service';
import { ModuleRef } from '@nestjs/core';

@Controller(`users`)
export class UserController {
  constructor(private moduleRef: ModuleRef) {}
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    // const userReal = plainToClass(UserDto, user, {
    //   excludeExtraneousValues: true,
    // });
    // console.log(userReal);
    const userService = this.moduleRef.get(UserService);
    return userService.createUser(user);
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return 'test';
  }
}
