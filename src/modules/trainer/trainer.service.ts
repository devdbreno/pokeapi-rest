import { Injectable } from '@nestjs/common'

@Injectable()
export class TrainersService {
  public async findAllTrainers() {
    return [
      {
        username: 'Monkey D. Luffy',
        pokemons: ['Roronoa Zoro']
      },
      {
        username: 'Nami',
        pokemons: ['Vinsmoke Sanji']
      }
    ]
  }
}
