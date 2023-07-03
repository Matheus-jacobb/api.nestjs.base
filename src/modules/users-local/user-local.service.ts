import { ILocalUserService } from '@common/authentication/interfaces/local-user.service.interface';
import { IRequestUser } from '@common/authentication/models/request.user.interface';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRolesEnum } from '../users/models/user-roles.enum';
import { UserRepository } from '../users/repositories/user.repository';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class LocalUserService implements ILocalUserService {
  constructor(
    protected readonly repository: UserRepository,
  ) {}

  public async getUser(username: string, password: string): Promise<IRequestUser> {
    //TODO: ACERTAR O USERNAME E PASSWORD VINDO DO LOCAL STRATEGY
    // const user = await this.repository.findOneByEmail(username);
    //
    // if(!user)
    //   throw new UnauthorizedException('Email or password invalid! ');
    //
    // const passwordMatch = await bcrypt.compare(user.password, password);
    //
    // if(!passwordMatch)
    //   throw new UnauthorizedException('Email or password invalid!');
    //
    // return user;

    return {
      id: 1,
      role: UserRolesEnum.USER
    }
  }
}
