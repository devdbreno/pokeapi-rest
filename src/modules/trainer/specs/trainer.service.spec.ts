import { Logger } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'

import { PokeapiGateway } from '@gateways/pokeapi.gateway'

describe('TrainerService', () => {
  const logger = new Logger('TrainersServiceSpec')

  let pokeapiGateway: PokeapiGateway

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [PokeapiGateway]
    }).compile()

    pokeapiGateway = moduleRef.get<PokeapiGateway>(PokeapiGateway)
  })

  describe('Make sure that the TrainersService dependencies should be defined:', () => {
    it('PokeapiGateway should be defined!', () => {
      expect(pokeapiGateway).toBeDefined()
    })
  })

  describe('Make sure that the PokeapiGateway methods should work correctly', () => {
    it('findPokemonByName should return the proper Pokemon', async () => {
      logger.debug('addPokemonTrainer')
    })
  })
})
