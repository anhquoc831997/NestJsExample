import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LOGGER_KEY, loggerFacetory } from 'src/logger/logger.service';
import { StoreModule } from 'src/store/store.module';

@Module({
  imports: [
    StoreModule.register({
      dirname: 'store',
      filename: 'user.json',
    }),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: LOGGER_KEY,
      useFactory: loggerFacetory,
    },
  ],
})
export class UserModule {}
