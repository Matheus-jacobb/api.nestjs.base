//#region Imports

import { RequestUser } from '@common/authorization';
import { ApiOkResponse, ApiOperation } from '@common/swagger';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { UserPaginatedProxy } from '../models/user.paginated.proxy';
import { UserPaginatedQuery } from '../models/user.paginated.query';
import { UserProxy } from '../models/user.proxy';
import { CreateUserPayload } from '../models/create-user.payload';
import { UpdateUserPayload } from '../models/update-user.payload';
import { UserService } from '../services/user.service';

//#endregion

@ApiTags('users')
@Controller('users')
export class UserController {

  //#region Constructor

  constructor(
    protected readonly service: UserService,
  ) { }

  //#endregion

  //#region Public Methods

  // @Get()
  // @ApiOperation('List Users paginated.')
  // @ApiOkResponse(UserPaginatedProxy)
  // public getPaginated(@Query() query: UserPaginatedQuery): Promise<UserPaginatedProxy> {
  //   return this.service.getPaginated(requestUser, query);
  // }

  @Get(':id')
  @ApiOperation('Get a User by id.')
  @ApiOkResponse(UserProxy)
  public get(requestUser: RequestUser, @Param('id') id: number): Promise<UserProxy> {
    return this.service.get(requestUser, id);
  }

  @Post()
  @ApiOperation('Create a new User.')
  @ApiOkResponse(UserProxy)
  public create(requestUser: RequestUser, @Body() payload: CreateUserPayload): Promise<UserProxy> {
    return this.service.create(requestUser, payload);
  }

  @Put(':id')
  @ApiOperation('Update a User.')
  @ApiOkResponse(UserProxy)
  public update(requestUser: RequestUser, @Param('id') id: number, @Body() payload: UpdateUserPayload): Promise<UserProxy> {
    return this.service.update(requestUser, id, payload);
  }

  @Delete(':id')
  @ApiOperation('Delete a User.')
  @ApiNoContentResponse()
  @HttpCode(HttpStatus.NO_CONTENT)
  public delete(requestUser: RequestUser, @Param('id') id: string): Promise<void> {
    return this.service.delete(requestUser, id);
  }

  //#endregion

}
