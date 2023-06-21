//#region Imports

import { BaseIdentityRepository } from '@common/typeorm/identity/base-identity.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

//#endregion

@Injectable()
export class UserRepository extends BaseIdentityRepository<UserEntity> {

  //#region Constructor

  constructor(
    @InjectRepository(UserEntity)
    repository: Repository<UserEntity>,
  ) {
    super(repository);
  }

  //#endregion

  //#region Public Methods

  //#endregion

}
