//#region Imports

import { RequestUser } from '@common/authorization';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserRolesEnum } from '../models/user-roles.enum';
import { UserPaginatedProxy } from '../models/user.paginated.proxy';
import { UserPaginatedQuery } from '../models/user.paginated.query';
import { UserProxy } from '../models/user.proxy';
import { CreateUserPayload } from '../models/create-user.payload';
import { UpdateUserPayload } from '../models/update-user.payload';
import { UserRepository } from '../repositories/user.repository';

//#endregion

@Injectable()
export class UserService {

  //#region Constructor

  constructor(
    protected readonly repository: UserRepository,
  ) { }

  //#endregion

  //#region Public Methods

  //  TODO: FAZER PAGINATED
  // public async getPaginated(requestUser: RequestUser, options: UserPaginatedQuery): Promise<UserPaginatedProxy> {
  //   const onValidate = async () => {
  //     const [data, total] = await this.repository.listByDefaultQuery(options);
  //
  //     return new UserPaginatedProxy(
  //       data.map(doc => new UserProxy(doc)),
  //       options,
  //       total,
  //     );
  //   };
  //
  //   if (requestUser.roles === UserRolesEnum.ADMIN)
  //     return await onValidate();
  //
  //   throw new ForbiddenException('You are not allowed to list Users.');
  // }

  public async get(requestUser: RequestUser, id: number): Promise<UserProxy> {
    const onValidate = async () => {
      return await this.repository.findOneBy({ id }).then(doc => new UserProxy(doc));
    };

    if (requestUser.role === UserRolesEnum.ADMIN)
      return await onValidate();

    throw new ForbiddenException('You are not allowed to get User info.');
  }

  public async create(requestUser: RequestUser, payload: CreateUserPayload): Promise<UserProxy> {
    const onValidate = async () => {
      const doc = this.repository.create({
        name: payload.name
      });

      return await this.repository.save(doc)
        .then(doc => new UserProxy(doc));
    };

    if (requestUser.role === UserRolesEnum.ADMIN)
      return await onValidate();

    throw new ForbiddenException('You are not allowed to create a User.');
  }

  public async update(requestUser: RequestUser, id: number, payload: UpdateUserPayload): Promise<UserProxy> {
    const onValidate = async () => {
      const doc = await this.repository.findOneBy({ id });

      if (payload.name)
        doc.name = payload.name;

      return await this.repository.save(doc)
        .then(doc => new UserProxy(doc));
    };

    if (requestUser.role === UserRolesEnum.ADMIN)
      return await onValidate();

    throw new ForbiddenException('You are not allowed to update a User.');
  }

  public async delete(requestUser: RequestUser, id: string): Promise<void> {
    const onValidate = async () => {
      // await this.repository.findByIdAndDelete(id);
    };

    if (requestUser.role === UserRolesEnum.ADMIN)
      return await onValidate();

    throw new ForbiddenException('You are not allowed to delete a User.');
  }

  //#endregion

}
