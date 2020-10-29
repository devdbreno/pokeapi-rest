import { Body, Controller, Get, Logger, Post } from '@nestjs/common'

import { CreateTrainerDTO } from '@trainer/dto/create-trainer.dto'

@Controller('trainers')
export class TrainersController {
  private logger = new Logger(TrainersController.name)

  @Get()
  async findAllTrainers() {
    this.logger.debug('findAllTrainers')
  }

  @Post()
  async createTrainer(@Body() createTrainerDTO: CreateTrainerDTO): Promise<void> {
    this.logger.debug('TrainersController.createTrainer has been called!')
    this.logger.debug(createTrainerDTO)
  }

  @Post('/:trainerId/pokemon')
  public async addPokemonTrainer() {
    this.logger.debug('addPokemonTrainer')
  }
}
