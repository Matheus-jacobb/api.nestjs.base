import dotenv from 'dotenv';

dotenv.config();

import { createDatasource } from './datasource.db';

export const dataSource = createDatasource({
  type: process.env.DB_TYPE as any,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: +process.env.DB_PORT!,
  host: process.env.DB_HOST,
  synchronize: process.env.DB_SINCRONIZE === 'true',
});
