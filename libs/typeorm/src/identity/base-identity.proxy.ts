//#region Imports

import { ApiProperty } from '@nestjs/swagger';
import { BaseIdentityEntity } from './base-identity-entity';

//#endregion

/**
 * A classe que representa as informações básicas de toda entidade que será enviada para o usuário
 */
export class BaseIdentityProxy<T extends BaseIdentityEntity> {

  //#region Public Properties

  /**
   * Construtor padrão
   *
   * @param base As informações da entidade
   */
  constructor(base: T) {
    this.id = base.id;
  }

  //#endregion

  //#region Constructor

  /**
   * A identificação dessa entidade
   */
  @ApiProperty()
  public id!: number;

  //#endregion

}
