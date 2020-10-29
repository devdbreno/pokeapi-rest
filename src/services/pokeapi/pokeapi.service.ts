import { Injectable, Logger } from '@nestjs/common'

import { PokeapiRepository } from '@pokeapi/data/pokeapi.repository'
import { PokemonModel } from '@pokeapi/models/pokeapi.model'

@Injectable()
export class PokeapiService {
  private logger = new Logger(PokeapiService.name)

  constructor(private pokedexRepository: PokeapiRepository) {}

  public async findPokemonByName(name: string): Promise<PokemonModel | null> {
    this.logger.debug(`findPokemonByName('${name}')`)

    if (!(typeof name === 'string' && name.length >= 3)) {
      throw new Error('Invalid pokemon name param!')
    }

    const pokemon = await this.pokedexRepository.findPokemonByName(name)

    return pokemon
  }
}
