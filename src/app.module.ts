import { LoggerModule } from '@common/logger';
import { ValidationModule } from '@common/validation';
import { Module } from '@nestjs/common';
import '@common/config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormModule } from './typeorm/typeorm.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
    }),
    LoggerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          prettyLog: config.get<string>('NODE_ENV') !== 'production',
          pinoHttp: {
            level: config.get<string>('LOG_LEVEL') ?? 'info',
          },
        };
      },
    }),
    ValidationModule,
    TypeormModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
