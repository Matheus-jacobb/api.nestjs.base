import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormEntities } from '../../typeorm/entities.db';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
  ],
  providers: [
    UserRepository,
    UserService,
  ],
  exports: [
    UserRepository,
    UserService,
  ],
})
export class UserModule {}
