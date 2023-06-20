import { BaseEntity } from '@common/typeorm';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column()
  public name!: string;
}
