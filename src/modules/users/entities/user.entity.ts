import { BaseEntity } from '@common/typeorm';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  constructor(
    entity: Partial<UserEntity>,
  ) {
    super();
    Object.assign(this, entity);
  }

  @Column()
  public email!: string;

  @Column()
  public password!: string;

  @Column()
  public role!: string;
}
