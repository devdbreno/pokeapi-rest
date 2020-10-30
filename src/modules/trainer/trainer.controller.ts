import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
  UseInterceptors
} from '@nestjs/common'

import { AddPokemonParamsDTO, CreatedResponse, CreateTrainerDTO, FindTrainerByIdParams } from '@interfaces/trainer.interface'

import { TrainersService } from '@trainer/trainer.service'

@Controller('trainers')
export class TrainersController {
  private logger = new Logger('TrainersController')

  constructor(private readonly trainersService: TrainersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  public async findAllTrainers() {
    return this.trainersService.findAllTrainers()
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:trainerId')
  public async findeTrainerById(@Param() { trainerId }: FindTrainerByIdParams) {
    return this.trainersService.findTrainerById(trainerId)
  }

  @Post()
  async createTrainer(@Body() createTrainerDTO: CreateTrainerDTO): Promise<CreatedResponse> {
    await this.trainersService.createTrainer(createTrainerDTO)

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Trainer has been created!'
    }
  }

  @Post('/:trainerId/pokemons/:pokemonName')
  public async addPokemon(@Param() addPokemonParamsDTO: AddPokemonParamsDTO): Promise<CreatedResponse> {
    await this.trainersService.addPokemon(addPokemonParamsDTO)

    return {
      statusCode: HttpStatus.CREATED,
      message: 'Pokemon has been added to trainer!'
    }
  }
}
