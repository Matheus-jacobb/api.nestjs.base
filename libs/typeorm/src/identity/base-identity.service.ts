//#region Imports

import { BaseIdentityEntity } from './base-identity-entity';
import { BaseIdentityRepository } from './base-identity.repository';

//#endregion

/**
 * A classe que representa o serviço base para outros serviços
 */
export class BaseIdentityService<TEntity extends BaseIdentityEntity, TRepository extends BaseIdentityRepository<TEntity>> {

  //#region Constructor

  /**
   * Construtor padrão
   */
  constructor(
    protected readonly repository: TRepository,
  ) { }

  //#endregion

  //#region Base Methods

  /**
   * Método que retorna a referência para o repositório que esse serviço lida principalmente
   */
  public getRepository(): TRepository {
    return this.repository;
  }

  //#endregion

}
