//#region Imports

import { DefaultPaginatedQuery } from './default.paginated.query';
import { ApiProperty } from '@nestjs/swagger';

//#endregion

export abstract class DefaultPaginatedProxy<T> {

  //#region Constructor

  constructor(
    data: T[],
    query: DefaultPaginatedQuery,
    total: number,
  ) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.data = data;
    this.count = data.length;
    this.page = query.page;
    this.limit = query.limit;
    this.total = total;
  }

  //#endregion

  //#region Public Properties

  @ApiProperty()
  public page!: number;

  @ApiProperty()
  public limit!: number;

  @ApiProperty()
  public total!: number;

  @ApiProperty()
  public count!: number;

  public abstract data: T[];

  //#endregion

}
