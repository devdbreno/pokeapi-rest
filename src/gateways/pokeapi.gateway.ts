import { Injectable, NotFoundException } from '@nestjs/common'

import Pokedex from 'pokedex-promise-v2'

import { PokemonGateway } from '@interfaces/pokeapi.interface'

@Injectable()
export class PokeapiGateway {
  private pokedexManager = new Pokedex({ cacheLimit: 120 * 1000, timeout: 2 * 1000 })

  public async findPokemonByName(pokemonName: string): Promise<PokemonGateway> {
    const pokemon = new PokemonGateway()

    try {
      const { id, name, types, weight } = await this.pokedexManager.getPokemonByName(pokemonName)

      pokemon.id = id
      pokemon.name = name
      pokemon.types = types
      pokemon.weight = weight
    } catch (e) {
      throw new NotFoundException(`Pokemon '${pokemonName}' not found!`)
    }

    return pokemon
  }
}
