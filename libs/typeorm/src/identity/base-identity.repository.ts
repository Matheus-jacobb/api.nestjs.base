//#region Imports

import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { BaseIdentityEntity } from './base-identity-entity';

//#endregion

/**
 * A classe que representa o serviço que lida com a entidade base
 */
export class BaseIdentityRepository<TEntity extends BaseIdentityEntity> extends BaseRepository<TEntity> {
  /**
   * Método que verifica se uma entidade existe
   *
   * @param entityIds A identificação dos ids
   */
  public async exists(...entityIds: number[]): Promise<boolean> {
    const cleanedIds = [...new Set(entityIds)];

    return await this.createQueryBuilder()
      .whereInIds(cleanedIds)
      .getCount()
      .then(count => count >= cleanedIds.length);
  }
}
