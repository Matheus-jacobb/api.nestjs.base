import { Module } from '@nestjs/common';
import { UserModuleRouting } from './modules/users/user.module.routing';

@Module({
  imports: [
    UserModuleRouting,
  ],
})
export class AppModuleRouting {}
