import { InjectRepository } from '@nestjs/typeorm'
import { Injectable, NotFoundException } from '@nestjs/common'

import { PokeapiGateway } from '@gateways/pokeapi.gateway'

import { AddPokemonDTO, AddPokemonParamsDTO, CreateTrainerDTO } from '@interfaces/trainer.interface'

import { TrainerRepository } from '@trainer/trainer.repository'

@Injectable()
export class TrainersService {
  @InjectRepository(TrainerRepository)
  private readonly trainerRepository: TrainerRepository

  constructor(private readonly pokeapiGateway: PokeapiGateway) {}

  public async createTrainer(createTrainerDTO: CreateTrainerDTO) {
    return this.trainerRepository.createTrainer(createTrainerDTO)
  }

  public async findAllTrainers() {
    return this.trainerRepository.find()
  }

  public async findTrainerById(trainerId: string) {
    const foundTrainer = await this.trainerRepository.findOneOrFail(trainerId)

    if (!foundTrainer) {
      throw new NotFoundException('Trainer not found!')
    }

    return foundTrainer
  }

  public async addPokemon(addPokemonParamsDTO: AddPokemonParamsDTO) {
    const foundTrainer = await this.findTrainerById(addPokemonParamsDTO.trainerId)
    const pokemon = await this.pokeapiGateway.findPokemonByName(addPokemonParamsDTO.pokemonName)

    const addPokemonDTO: AddPokemonDTO = {
      trainer: foundTrainer,
      pokemon
    }

    await this.trainerRepository.addPokemon(addPokemonDTO)

    return addPokemonDTO
  }
}
