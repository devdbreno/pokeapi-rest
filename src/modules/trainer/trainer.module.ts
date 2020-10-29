import { Module } from '@nestjs/common'

import { TrainersController } from '@trainer/trainer.controller'
import { TrainersService } from '@trainer/trainer.service'

@Module({
  controllers: [TrainersController],
  providers: [TrainersService]
})
export class TrainerModule {}
