//#region Imports

import { BaseIdentityRepository } from '@common/typeorm/identity/base-identity.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
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

  public async findOneByEmail(email: string): Promise<UserEntity | null> {
    return await this.repository.findOne({
      where: {
        email
      }
    }as FindOneOptions<UserEntity>)
  }

  //#endregion

}
