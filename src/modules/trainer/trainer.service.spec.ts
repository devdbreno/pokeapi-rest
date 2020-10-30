import { Test, TestingModule } from '@nestjs/testing'

import { TrainersService } from '@trainer/trainer.service'

describe('TrainerService', () => {
  let trainerService: TrainersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainersService]
    }).compile()

    trainerService = module.get<TrainersService>(TrainersService)
  })

  describe('dependencies definitions', () => {
    it('TrainerService should be defined!', () => {
      expect(trainerService).toBeDefined()
    })
  })
})
