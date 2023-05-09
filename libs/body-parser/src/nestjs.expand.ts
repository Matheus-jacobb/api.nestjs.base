import { INestApplication } from '@nestjs/common';
import bodyParser from 'body-parser';

export function expandNestJSForBodyParser(app: INestApplication): void {
  app.use(
    bodyParser.json({
      limit: '10mb',
    }),
  );

  //used for formData and nestjsCrud params (not only this)
  app.use(
    bodyParser.urlencoded({
      limit: '10mb',
      extended: true,
    }),
  );
}