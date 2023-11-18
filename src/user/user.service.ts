import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { StoreService } from 'src/store/store.service';
import { UserDto } from 'src/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('LOGGER_KEY') private LoggerService: LoggerService,
    private storeService: StoreService,
  ) {}

  createUser(user: UserDto): UserDto {
    this.LoggerService.log();
    this.storeService.save(user);
    user.id = 3;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    // todo something insert to database
    return user;
  }
}
