import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

export interface StoreConfig {
  dir: string;
  path: string;
}
const configFacebook = {
  appId: 'facebook001',
  appSecret: 'facebook001',
};

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'STORE_CONFIG',
      useValue: {
        dir: 'store',
        path: 'user',
      } as StoreConfig,
    },
  ],
})
export class UserModule {}
