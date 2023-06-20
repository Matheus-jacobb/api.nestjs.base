//#region Imports

import { TypeOrmCrudService } from '@rewiko/crud-typeorm';
import { Repository } from 'typeorm';
import { BaseTimestampEntity } from './base-timestamp-entity';
import { BaseTimestampRepository } from './base-timestamp.repository';

//#endregion

/**
 * A classe que representa o serviço que lida com as imagens
 */
export class BaseTimestampService<TEntity extends BaseTimestampEntity,
  TRepository extends BaseTimestampRepository<TEntity>> extends TypeOrmCrudService<TEntity> {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    protected readonly repository: Repository<TEntity>,
  ) {
    super(repository);
  }

  //#endregion

}
