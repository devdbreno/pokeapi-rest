import { BadRequestException, ConflictException, InternalServerErrorException, Logger } from '@nestjs/common'

import { genSalt, hash } from 'bcrypt'
import { EntityRepository, Repository } from 'typeorm'

import { TrainerEntity } from '@entities/trainer.entity'

import { AddPokemonDTO, CreateTrainerDTO } from '@interfaces/trainer.interface'

@EntityRepository(TrainerEntity)
export class TrainerRepository extends Repository<TrainerEntity> {
  public async createTrainer(createTrainerDTO: CreateTrainerDTO): Promise<void> {
    const { username, password } = createTrainerDTO

    const trainerEntity = new TrainerEntity()

    trainerEntity.username = username
    trainerEntity.pokemons = []
    trainerEntity.salt = await genSalt()
    trainerEntity.password = await TrainerRepository.hashPassword(password, trainerEntity.salt)

    try {
      await trainerEntity.save()
    } catch ({ code }) {
      if (code === '23505') throw new ConflictException(`Username '${username}' already exists!`)
      else throw new InternalServerErrorException()
    }
  }

  public async addPokemon(addPokemonDTO: AddPokemonDTO): Promise<void> {
    const foundPokemon = addPokemonDTO.trainer.pokemons.find(({ id }) => id === addPokemonDTO.pokemon.id)

    addPokemonDTO.trainer.pokemons.push(addPokemonDTO.pokemon)

    if (foundPokemon) {
      throw new BadRequestException(`Pokemon '${addPokemonDTO.pokemon.name}' already added!`)
    }

    try {
      await addPokemonDTO.trainer.save()
    } catch (e) {
      throw new InternalServerErrorException()
    }
  }

  private static async hashPassword(password: string, salt: string): Promise<string> {
    return hash(password, salt)
  }
}
