import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmOptionsFactory } from '@nestjs/typeorm'

export const AppConfig = () => ({
  server: {
    port: Number(process.env.PORT) ?? 3030
  },
  database: {
    type: process.env.DATABASE_TYPE ?? 'postgres',
    host: process.env.DATABASE_HOST ?? 'localhost',
    port: process.env.DATABASE_PORT ?? 5432,
    username: process.env.DATABASE_USERNAME ?? 'postgres',
    password: process.env.DATABASE_PASSWORD ?? 'postgres',
    database: process.env.DATABASE_NAME ?? 'postgresdb',
    synchronize: true,
    logging: false,
    entities: ['dist/**/*.entity.js']
  }
})

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions() {
    return this.configService.get('database')
  }
}
