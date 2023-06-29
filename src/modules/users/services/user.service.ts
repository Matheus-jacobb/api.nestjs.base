//#region Imports

import { IRequestUser } from '@common/authorization';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { CreateUserPayload } from '../models/create-user.payload';
import { UpdateUserPayload } from '../models/update-user.payload';
import { UserRolesEnum } from '../models/user-roles.enum';
import { UserPaginatedProxy } from '../models/user.paginated.proxy';
import { UserPaginatedQuery } from '../models/user.paginated.query';
import { UserProxy } from '../models/user.proxy';
import { UserRepository } from '../repositories/user.repository';
import * as bcrypt from 'bcryptjs'

//#endregion

@Injectable()
export class UserService {

  //#region Constructor

  constructor(
    protected readonly repository: UserRepository,
  ) { }

  //#endregion

  //#region Public Methods

  public async getPaginated(requestUser: IRequestUser, options: UserPaginatedQuery): Promise<UserPaginatedProxy> {
    const onValidate = async () => {
      const [data, total] = await this.repository.listByDefaultQuery(options);

      return new UserPaginatedProxy(
        data.map(doc => new UserProxy(doc)),
        options,
        total,
      );
    };

    if (requestUser.role === UserRolesEnum.ADMIN)
      return await onValidate();

    throw new ForbiddenException('You are not allowed to list Users.');
  }

  public async get(requestUser: IRequestUser, id: number): Promise<UserProxy> {
    const onValidate = async () => {
      return await this.repository.findById(id).then(doc => new UserProxy(doc));
    };

    if (requestUser.role === UserRolesEnum.ADMIN)
      return await onValidate();

    throw new ForbiddenException('You are not allowed to get User info.');
  }

  public async create(requestUser: IRequestUser, payload: CreateUserPayload): Promise<UserProxy> {
    const onValidate = async () => {
      const salt = await bcrypt.genSalt();

      payload.password = await bcrypt.hash(payload.password, salt);

      const entity = new UserEntity({
        email: payload.email,
        role: payload.role,
        password: payload.password
      });

      return await this.repository.insert(entity)
        .then(doc => new UserProxy(doc));
    };

    // if (requestUser.role === UserRolesEnum.ADMIN)

      return await onValidate();

    throw new ForbiddenException('You are not allowed to create a User.');
  }

  public async update(requestUser: IRequestUser, id: number, payload: UpdateUserPayload): Promise<UserProxy> {
    const onValidate = async () => {
      const doc = await this.repository.findById(id);

      if (payload.name)
        doc.email = payload.name;

      return await this.repository.update(doc)
        .then(doc => new UserProxy(doc));
    };

    if (requestUser.role === UserRolesEnum.ADMIN)
      return await onValidate();

    throw new ForbiddenException('You are not allowed to update a User.');
  }

  public async delete(requestUser: IRequestUser, id: number): Promise<void> {
    const onValidate = async () => {
      await this.repository.deleteById(id);
    };

    if (requestUser.role === UserRolesEnum.ADMIN)
      return await onValidate();

    throw new ForbiddenException('You are not allowed to delete a User.');
  }

  public getRepository(): UserRepository {
    return this.repository;
  }

  //#endregion

}
