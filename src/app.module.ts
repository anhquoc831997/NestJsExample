import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [UserModule, StoreModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
