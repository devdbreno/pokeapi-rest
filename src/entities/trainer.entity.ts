import { Entity, Column } from 'typeorm'
import { Exclude } from 'class-transformer'
import { hash as hashBcrpyt } from 'bcrypt'

import { AbstractEntity } from '@entities/abstract.entity'

import { PokemonGateway } from '@interfaces/pokeapi.interface'

@Entity('trainers')
export class TrainerEntity extends AbstractEntity {
  @Column({ unique: true })
  username: string

  @Column()
  @Exclude()
  password: string

  @Column('jsonb')
  pokemons: PokemonGateway[]

  @Column()
  @Exclude()
  salt: string

  public async validatePassword(password: string): Promise<boolean> {
    const hash = await hashBcrpyt(password, this.salt)
    return hash === this.password
  }
}
