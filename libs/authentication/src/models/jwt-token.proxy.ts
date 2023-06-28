import { ApiProperty } from '@nestjs/swagger';

export class JwtTokenProxy {

  constructor(
    token: string,
    expiresAt: Date,
  ) {
    this.token = token;
    this.expiresAt = expiresAt;
  }

  @ApiProperty()
  public token: string;

  @ApiProperty()
  public expiresAt: Date;

}
