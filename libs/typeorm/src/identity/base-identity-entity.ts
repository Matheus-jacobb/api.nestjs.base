//#region Imports

import { PrimaryGeneratedColumn } from 'typeorm';

//#endregion

/**
 * A classe base para as entidades
 */
export class BaseIdentityEntity {

  /**
   * A identificação da entidade
   */
  @PrimaryGeneratedColumn()
  public id!: number;

}
