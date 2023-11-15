import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from 'src/user.dto';

@Controller(`users`)
export class UserController {
  @Post()
  createUser(@Body() user: UserDto): UserDto {
    user.id = 2;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    // const userReal = plainToClass(UserDto, user, {
    //   excludeExtraneousValues: true,
    // });
    // console.log(userReal);
    return UserDto.plainToClass(user);
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return 'test';
  }
}
