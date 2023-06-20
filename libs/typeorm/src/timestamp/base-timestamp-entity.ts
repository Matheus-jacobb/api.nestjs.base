//#region Imports

import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseIdentityEntity } from '../identity/base-identity-entity';

//#endregion

/**
 * A classe base para as entidades
 */
export class BaseTimestampEntity extends BaseIdentityEntity {

  /**
   * Diz quando foi criado essa entidade
   */
  @CreateDateColumn()
  public createdAt!: Date;

  /**
   * Diz quando foi atualizado essa entidade
   */
  @UpdateDateColumn()
  public updatedAt!: Date;

}
