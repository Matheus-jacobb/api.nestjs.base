//#region Imports

import { NotFoundException } from '@nestjs/common';
import { BaseIdentityRepository } from '../identity/base-identity.repository';
import { BaseTimestampEntity } from './base-timestamp-entity';

//#endregion

/**
 * A classe que representa o serviço que lida com a entidade base
 */
export class BaseTimestampRepository<TEntity extends BaseTimestampEntity> extends BaseIdentityRepository<TEntity> {

  /**
   * Método que procura uma entidade pela sua identificação
   *
   * @param entityId A identificação da entidade
   * @param relations A lista de relações que você pode incluir
   */
  public async findById(entityId: number, relations: string[] = []): Promise<TEntity> {
    const [entity] = await this.findByIds([entityId]);

    if (!entity)
      throw new NotFoundException(`A entidade procurada pela identificação (${ entityId }) não foi encontrada.`);

    return entity;
  }

}
