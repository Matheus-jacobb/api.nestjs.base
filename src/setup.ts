import { expandNestJSForBodyParser } from '@common/body-parser';
import { expandNestJSForLogger } from '@common/logger/nestjs.expand';
import { expandNestJSForSwagger } from '@common/swagger';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const config = app.get(ConfigService);

  const configSwagger = new DocumentBuilder()
    .setTitle('API Base')
    .setDescription('The base API')
    .setVersion(config.get('VERSION') ?? '0.0.0')
    .addBearerAuth()
    .addServer('/', 'dev')
    .build();

  expandNestJSForSwagger(app, configSwagger);
  expandNestJSForBodyParser(app);
  expandNestJSForLogger(app);

  return app;
}
