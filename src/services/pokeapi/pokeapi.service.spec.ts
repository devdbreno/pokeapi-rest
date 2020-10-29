import { Test, TestingModule } from '@nestjs/testing'

import { PokeapiService } from '@pokeapi/pokeapi.service'
import { PokeapiRepository } from '@pokeapi/data/pokeapi.repository'
import { PokemonModel } from '@pokeapi/models/pokeapi.model'

describe('PokeapiService', () => {
  let pokeapiService: PokeapiService
  let pokeapiRepository: PokeapiRepository

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [PokeapiService, PokeapiRepository]
    }).compile()

    pokeapiService = moduleRef.get<PokeapiService>(PokeapiService)
    pokeapiRepository = moduleRef.get(PokeapiRepository)
  })

  describe('Make sure that the PokeapiService dependencies should be defined:', () => {
    it('PokeapiService itself should be defined!', () => {
      expect(pokeapiService).toBeDefined()
    })

    it('PokeapiRepository dependency of PokeapiService should be defined!', () => {
      expect(pokeapiRepository).toBeDefined()
    })
  })

  describe('Make sure that the PokeapiService methods should work correctly', () => {
    const pokemons: PokemonModel[] = [
      {
        id: '7rdfdf57_aFdfdsfg',
        name: 'digimon',
        types: ['fire'],
        weight: 123.5
      },
      {
        id: 'U4678allpssf_f2432',
        name: 'pikachu',
        types: ['rain'],
        weight: 60.2
      }
    ]

    async function findPokemonByNameCallback(pokemonName: string): Promise<PokemonModel> {
      return pokemons.find(({ name }) => name === pokemonName) as PokemonModel
    }

    it('findPokemonByName should return the proper Pokemon!', async () => {
      jest.spyOn(pokeapiRepository, 'findPokemonByName').mockImplementation(findPokemonByNameCallback)

      const pokemon = await pokeapiService.findPokemonByName('pikachu')
      const expectedPokemon = await findPokemonByNameCallback('pikachu')

      expect(pokemon).toEqual(expectedPokemon)
    })
  })
})
