import { JwtTokenProxy } from '@common/authentication/models/jwt-token.proxy';
import { IRequestUser } from '@common/authentication/models/request.user.interface';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthenticationService {

  constructor(
    private readonly jwtService: JwtService,
  ) {}
  public async getJWTFromRequestUser(requestUser: IRequestUser): Promise<JwtTokenProxy> {
    // return await this.jwtAuthService.signIn(requestUser);

    return {
      token: await this.jwtService.signAsync(requestUser),
      expiresAt: new Date(),
    };
  }
}
