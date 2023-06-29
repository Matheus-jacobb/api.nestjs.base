//#region Imports

import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { UserRolesEnum } from './user-roles.enum';

//#endregion

export class CreateUserPayload {

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  public email!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  public password!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  public role!: string;

}
