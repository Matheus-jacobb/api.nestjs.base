import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function expandNestJSForSwagger(
  app: INestApplication,
  config: ReturnType<DocumentBuilder['build']>,
): void {
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/swagger', app, document);
}
