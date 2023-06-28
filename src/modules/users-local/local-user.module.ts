import { LocalAuthenticationModule } from '@common/authentication';
import { Module } from '@nestjs/common';
import { UserModule } from '../users/user.module';
import { LocalUserService } from './user-local.service';

@Module({
  imports: [
    LocalAuthenticationModule.registerRoot({
      imports: [
        UserModule,
      ],
      providers: [
        LocalUserService,
      ],
      service: LocalUserService,
    }),
  ],
})
export class LocalUserModule {}
