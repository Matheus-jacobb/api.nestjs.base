import { createDatasource } from './datasource.db';
import dbConfig from './db.config';

const defaultConfig = dbConfig();

export default createDatasource({
  type: defaultConfig.DB_TYPE as any,
});
