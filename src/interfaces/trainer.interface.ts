import { IsString, IsUUID, Length } from 'class-validator'

import { TrainerEntity } from '@entities/trainer.entity'
import { PokemonGateway } from '@interfaces/pokeapi.interface'

export type TrainerSanitized = Pick<TrainerEntity, 'pokemons' | 'save'>

export class CreateTrainerDTO {
  @IsString()
  @Length(3, 20)
  username: string

  @IsString()
  @Length(8, 20)
  password: string
}

export class FindTrainerByIdParams {
  @IsUUID()
  trainerId: string
}

export class AddPokemonParamsDTO {
  @IsUUID()
  trainerId: string

  @Length(3, 20)
  pokemonName: string
}

export class AddPokemonDTO {
  trainer: TrainerSanitized
  pokemon: PokemonGateway
}
