//#region Imports

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

//#endregion

export class CreateUserPayload {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  public name!: string;

}