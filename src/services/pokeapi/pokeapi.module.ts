import { Module } from '@nestjs/common'

import { PokeapiService } from '@pokeapi/pokeapi.service'
import { PokeapiRepository } from '@pokeapi/data/pokeapi.repository'

@Module({
  providers: [PokeapiService, PokeapiRepository]
})
export class PokeapiModule {}
