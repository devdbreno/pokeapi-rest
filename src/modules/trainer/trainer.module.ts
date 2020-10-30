import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { PokeapiGateway } from '@gateways/pokeapi.gateway'

import { TrainersService } from '@trainer/trainer.service'
import { TrainerRepository } from '@trainer/trainer.repository'
import { TrainersController } from '@trainer/trainer.controller'

@Module({
  imports: [TypeOrmModule.forFeature([TrainerRepository])],
  controllers: [TrainersController],
  providers: [TrainersService, PokeapiGateway]
})
export class TrainerModule {}
