//#region Imports

import { DefaultPaginatedQuery } from '@common/paginated';
import { NotFoundException } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { BaseIdentityEntity } from './base-identity-entity';

//#endregion

export class BaseIdentityRepository<TEntity extends BaseIdentityEntity> {

  //#region

  constructor(
    protected readonly repository: Repository<TEntity>,
  ) { }

  //#endregion

  //#region Public Methods

  public async exists(...entityIds: number[]): Promise<boolean> {
    const cleanedIds = [...new Set(entityIds)];

    return await this.repository.createQueryBuilder()
      .whereInIds(cleanedIds)
      .getCount()
      .then(count => count >= cleanedIds.length);
  }

  public async listByDefaultQuery(options: DefaultPaginatedQuery): Promise<[data: TEntity[], total: number]> {
    const take = this.getLimitFromQuery(options);
    const page = this.getPageFromQuery(options);
    const skip = this.getSkipFromPageAndTake(page, take);

    return this.repository.findAndCount({
      skip,
      take,
    });
  }

  public async insert(entity: TEntity): Promise<TEntity> {
    return await this.repository.save(entity);
  }

  public async update(entity: TEntity): Promise<TEntity> {
    return await this.repository.save(entity);
  }

  public async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  public async findById(id: number): Promise<TEntity> {
    const entity = await this.repository.findOneBy({
      id,
    } as FindOptionsWhere<TEntity>);

    if (!entity)
      throw new NotFoundException(`The requested entity (${ this.repository.metadata.name }) was not found by ID #${ id }`);

    return entity;
  }

  //#endregion

  //#region Protected Methods

  protected getSkipFromPageAndTake(page: number, take: number) {
    return (page - 1) * take;
  }

  protected getLimitFromQuery(options: DefaultPaginatedQuery) {
    return Math.max(5, Math.min(200, options.limit));
  }

  protected getPageFromQuery(options: DefaultPaginatedQuery) {
    return Math.max(1, options.page);
  }

  //#endregion

}
