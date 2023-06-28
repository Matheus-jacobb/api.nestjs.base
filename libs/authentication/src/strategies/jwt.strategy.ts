// import { Injectable } from "@nestjs/common";
// import { ConfigService } from '@nestjs/config';
// import { PassportStrategy } from "@nestjs/passport";
// import { ExtractJwt, Strategy } from "passport-jwt";
// import { UserEntity } from '../../users/entities/user.entity';
// import { JwtPayload } from "../models/jwt.payload";
// import { AuthService } from "../services/auth.service";
//
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//
//   constructor(
//     private readonly service: AuthService,
//     private readonly config: ConfigService
//   ) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: config.get('JWT_SECRET_KEY') || 'CHANGE_THIS_SECRET',
//     });
//   }
//
//   public async validate(payload: JwtPayload): Promise<UserEntity> {
//     return this.service.validateJwt(payload);
//   }
//
// }
