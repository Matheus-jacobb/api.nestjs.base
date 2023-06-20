import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormEntities } from '../../typeorm/entities.db';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [
    // TypeOrmModule.forFeature([...TypeormEntities]),
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
