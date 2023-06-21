import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule as InternalTypeOrmModule } from '@nestjs/typeorm';
import dbConfig from './db.config';
import { TypeormEntities } from './entities.db';
import { TypeormMigrations } from './migrations.db';

@Global()
@Module({
  imports: [
    InternalTypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: config.getOrThrow<any>('DB_TYPE'),
        username: config.getOrThrow<string>('DB_USER'),
        password: config.getOrThrow<string>('DB_PASSWORD'),
        database: config.getOrThrow<string>('DB_NAME'),
        host: config.getOrThrow<string>('DB_HOST'),
        port: +config.getOrThrow('DB_PORT'),
        synchronize: config.get('DB_SYNCHRONIZE') === 'true',
        entities: TypeormEntities,
        migrations: TypeormMigrations,
      }),
    }),
    ConfigModule.forFeature(dbConfig),
  ],
  exports: [
    InternalTypeOrmModule,
  ],
})
export class TypeormModule {}
