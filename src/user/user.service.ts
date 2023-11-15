import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user.dto';

@Injectable()
export class UserService {
  createUser(user: UserDto): UserDto {
    user.id = 3;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return UserDto.plainToClass(user);
  }
}
