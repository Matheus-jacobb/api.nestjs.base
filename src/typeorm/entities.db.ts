import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';
import { UserEntity } from '../modules/users/entities/user.entity';

export const TypeormEntities: DataSourceOptions['entities'] = [
  UserEntity,
];
