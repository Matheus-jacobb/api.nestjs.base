// import { JwtTokenProxy } from '@common/authentication/models/jwt-token.proxy';
// import { IRequestUser } from '@common/authentication/models/request.user.interface';
// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
//
// @Injectable()
// export class JwtAuthService {
//
//   constructor(
//     private readonly jwtService: JwtService,
//   ) {}
//
//   public async signIn(requestUser: IRequestUser): Promise<JwtTokenProxy> {
//     return {
//       token: await this.jwtService.signAsync(requestUser),
//       expiresAt: new Date(),
//     };
//   }
// }
