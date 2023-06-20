import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createDatasource } from './datasource.db';
import dbConfig from './db.config';
import { DataSourceToken } from './tokens';

@Global()
@Module({
  imports: [
    ConfigModule.forFeature(dbConfig),
  ],
  providers: [
    {
      provide: DataSourceToken,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const datasource = createDatasource({
          type: config.getOrThrow<any>('DB_TYPE'),
          username: config.getOrThrow<string>('DB_USER'),
          password: config.getOrThrow<string>('DB_PASSWORD'),
          database: config.getOrThrow<string>('DB_NAME'),
          host: config.getOrThrow<string>('DB_HOST'),
          port: +config.getOrThrow('DB_PORT'),
          synchronize: config.get('DB_SYNCHRONIZE') === 'true',
        });

        return datasource.initialize();
      },
    },
  ],
})
export class TypeormModule {}
