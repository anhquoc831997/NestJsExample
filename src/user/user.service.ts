import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from 'src/user.dto';
import { StoreConfig } from './user.module';

@Injectable()
export class UserService {
  constructor(@Inject('STORE_CONFIG') storeConfig: StoreConfig) {
    console.log(storeConfig);
  }
  createUser(user: UserDto): UserDto {
    user.id = 3;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    // todo something insert to database
    return user;
  }
}
