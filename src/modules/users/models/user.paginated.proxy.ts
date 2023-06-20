//#region Imports

import { DefaultPaginatedProxy } from '@common/paginated';
import { ApiProperty } from '@nestjs/swagger';
import { UserProxy } from './user.proxy';

//#endregion

export class UserPaginatedProxy extends DefaultPaginatedProxy<UserProxy> {
  @ApiProperty({ type: UserProxy, isArray: true })
  public data!: UserProxy[];
}