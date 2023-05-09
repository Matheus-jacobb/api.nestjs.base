import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: ValidationPipe,
      useValue: new ValidationPipe({
        whitelist: true,
        transform: true,
        stopAtFirstError: true,
      }),
    },
    {
      provide: APP_PIPE,
      useExisting: ValidationPipe,
    }
  ],
})
export class ValidationModule {}
