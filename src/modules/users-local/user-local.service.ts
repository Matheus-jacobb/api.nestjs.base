import { ILocalUserService } from '@common/authentication/interfaces/local-user.service.interface';
import { IRequestUser } from '@common/authentication/models/request.user.interface';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users/repositories/user.repository';

@Injectable()
export class LocalUserService implements ILocalUserService {
  constructor(
    protected readonly repository: UserRepository,
  ) {}

  public async getUser(username:string, password:string): Promise<IRequestUser> {
    // TODO: Implementar logica do banco

    return {id: 1, role: ''};
  }
}
