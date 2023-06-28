import { IRequestUser } from '@common/authentication/models/request.user.interface';
import { Inject } from '@nestjs/common';

export interface ILocalUserService {
  getUser(username: string, password: string): Promise<IRequestUser>;
}

export const LocalUserServiceSymbol = 'ILocalUserService';
export const InjectLocalUserService = () => Inject(LocalUserServiceSymbol);
