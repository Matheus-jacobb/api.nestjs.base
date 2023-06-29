import { ApiProperty } from '@nestjs/swagger';

export class LocalLoginPayload {
  @ApiProperty()
  public username!: string;

  @ApiProperty()
  public password!: string;
}
