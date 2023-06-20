//#region Imports

import { BaseProxy } from '@common/typeorm/base.proxy';
import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entities/user.entity';

//#endregion

export class UserProxy extends BaseProxy<UserEntity> {

  //#region Constructor

  constructor(
    entity: UserEntity,
  ) {
    super(entity)
  }

  //#endregion

  //#region Public Properties

  //#endregion

}
