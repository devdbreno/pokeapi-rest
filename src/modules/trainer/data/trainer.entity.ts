import { Exclude } from 'class-transformer'
import { IsEmail } from 'class-validator'
import { compare, hash } from 'bcrypt'
import { Entity, Column, BeforeInsert } from 'typeorm'

import { AbstractEntity } from '@/modules/shared/abstract.entity'

@Entity('trainers')
export class TrainerEntity extends AbstractEntity {
  @Column()
  @IsEmail()
  email: string

  @Column({ unique: true })
  username: string

  @Column()
  @Exclude()
  password: string

  @BeforeInsert()
  private async hashPassword() {
    this.password = await hash(this.password, 10)
  }

  public async comparePassword(attempt: string) {
    return await compare(attempt, this.password)
  }
}
