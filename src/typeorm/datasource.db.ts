import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import { TypeormEntities } from './entities.db';
import { TypeormMigrations } from './migrations.db';

export function createDatasource(options: DataSourceOptions): DataSource {
  const dataSource = new DataSource({
    entities: TypeormEntities,
    migrations: TypeormMigrations,
    ...options,
  });

  return dataSource;
}
