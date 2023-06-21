//#region Imports

import { BaseIdentityRepository } from '../identity/base-identity.repository';
import { BaseTimestampEntity } from './base-timestamp-entity';

//#endregion

export class BaseTimestampRepository<TEntity extends BaseTimestampEntity> extends BaseIdentityRepository<TEntity> {}
