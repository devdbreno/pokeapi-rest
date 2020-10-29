import { Test, TestingModule } from '@nestjs/testing'

import { TrainersController } from '@trainer/trainer.controller'
import { TrainersService } from '@trainer/trainer.service'

describe('TrainerController', () => {
  let trainerController: TrainersController
  let trainerService: TrainersService

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [TrainersController],
      providers: [TrainersService]
    }).compile()

    trainerController = moduleRef.get<TrainersController>(TrainersController)
    trainerService = moduleRef.get<TrainersService>(TrainersService)
  })

  describe('dependencies definitions', () => {
    it('TrainerController should be defined!', () => {
      expect(trainerController).toBeDefined()
    })

    it('TrainerService should be defined!', () => {
      expect(trainerService).toBeDefined()
    })
  })

  describe('GET Endpoints', () => {
    describe('/trainers', () => {
      it('findAllTrainers', async () => {
        expect(0)
      })
    })

    describe('/trainers/:trainerId', () => {
      it('findOneTrainer', async () => {
        expect(0)
      })
    })
  })
})
