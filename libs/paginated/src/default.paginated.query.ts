//#region Imports

import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

//#endregion

export abstract class DefaultPaginatedQuery {

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => +value)
  @IsInt()
  @Min(1)
  public readonly page: number = 1;

  @ApiPropertyOptional()
  @IsOptional()
  @Transform(({ value }) => +value)
  @IsInt()
  @Min(3)
  @Max(100)
  public readonly limit: number = 12;

}
