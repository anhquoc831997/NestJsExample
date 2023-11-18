import { UserDto } from 'src/user.dto';

export class UserMockService {
  create(user: UserDto): UserDto {
    return {
      username: 'mockusername',
      password: 'mockPassword',
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
