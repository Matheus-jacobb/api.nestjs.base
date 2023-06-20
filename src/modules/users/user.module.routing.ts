import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    UserModule,
  ],
  controllers: [
    UserController,
  ],
})
export class UserModuleRouting {}