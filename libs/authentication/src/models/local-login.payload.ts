import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class LocalLoginPayload {
  @ApiProperty()
  public username!: string;

  @ApiProperty()
  @MaxLength(3)
  public password!: string;
}
