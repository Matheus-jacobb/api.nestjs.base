import { INestApplication } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

export function expandNestJSForLogger(app: INestApplication): void {
  try {
    app.useLogger(app.get(Logger));
  } catch (e) {}
}
