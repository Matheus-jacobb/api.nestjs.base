import { ILocalUserService, InjectLocalUserService } from '@common/authentication/interfaces/local-user.service.interface';
import { IRequestUser } from '@common/authentication/models/request.user.interface';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectLocalUserService()
    protected readonly service: ILocalUserService,
  ) {
    super();
  }

  public async validate(username: string, password: string): Promise<IRequestUser> {
    //TODO: ADICIONAR VALIDAÇÕES NO USERNAME, PASSWORD
    // VALIDAR ERRO USERNAME VINDO COMO "VALOR" COM ASPAS
    return await this.service.getUser(username, password);
  }
}
