declare module 'pokedex-promise-v2' {
  import { PokemonGateway } from '@interfaces/pokeapi.interface'

  export interface PokedexOptions {
    protocol?: 'http' | 'https'
    hostName?: string
    versionPath?: string
    cacheLimit?: number
    timeout?: number
  }

  export default class Pokedex {
    constructor(pokedexOpts?: PokedexOptions)

    public getPokemonByName(name: string): Promise<PokemonGateway>
  }
}
