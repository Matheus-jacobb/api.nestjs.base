import { JwtTokenProxy } from '@common/authentication/models/jwt-token.proxy';
import { IRequestUser } from '@common/authentication/models/request.user.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  public async getJWTFromRequestUser(requestUser: IRequestUser): Promise<JwtTokenProxy> {
    //TODO: GERAR JWT
    //CRIAR UM SERVICE JWT PARA RETORNAR O JWT
    return new JwtTokenProxy('12', new Date());
  }
}
