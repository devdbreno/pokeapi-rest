import { Injectable, Logger } from '@nestjs/common'

import { PokemonModel } from '@pokeapi/models/pokeapi.model'

@Injectable()
export class PokeapiRepository {
  private logger = new Logger(PokeapiRepository.name)

  public async findPokemonByName(name: string): Promise<PokemonModel | null> {
    this.logger.debug(`findPokemonByName('${name}')`)

    return null
  }
}
