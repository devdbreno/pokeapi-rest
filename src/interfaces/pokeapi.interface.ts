import { IsArray, IsInt, IsNumber, Length } from 'class-validator'

export class PokemonGateway {
  @IsInt()
  id: number

  @Length(3, 20)
  name: string

  @IsArray()
  types: unknown[]

  @IsNumber()
  weight: number
}
