import { AuthenticationService } from '@common/authentication/services/authentication.service';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [
    AuthenticationService,
    // JwtAuthService
  ],
  exports: [
    AuthenticationService,
    // JwtAuthService
  ],
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: ((config: ConfigService) => ({
        secret: config.getOrThrow<any>('JWT_SECRET_KEY'),
        global: true,
      })),
    }),
  ],
})
export class AuthenticationModule {}
