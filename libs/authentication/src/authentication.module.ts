import { AuthenticationService } from '@common/authentication/services/authentication.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    AuthenticationService,
  ],
  exports: [
    AuthenticationService,
  ],
})
export class AuthenticationModule {}
