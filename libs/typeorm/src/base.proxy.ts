//#region Imports

import { BaseEntity } from '@common/typeorm/base.entity';
import { BaseTimestampProxy } from '@common/typeorm/timestamp/base-timestamp.proxy';
import { ApiProperty } from '@nestjs/swagger';

//#endregion

/**
 * A classe que representa as informações básicas de toda entidade que será enviada para o usuário
 */
export class BaseProxy<T extends BaseEntity> extends BaseTimestampProxy<T> {

  //#region Constructor

  /**
   * Construtor padrão
   *
   * @param base As informações da entidade
   */
  constructor(base: T) {
    super(base);

    this.isActive = base.isActive;
  }

  //#endregion

  //#region Public Properties

  /**
   * Diz se está ativo
   */
  @ApiProperty({ default: true })
  public isActive?: boolean;

  //#endregion

}
