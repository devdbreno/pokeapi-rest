import { registerAs } from '@nestjs/config'

export const serverConfig = registerAs('server', () => ({
  port: Number(process.env.PORT ?? 3030),
  host: process.env.HOST ?? '127.0.0.1'
}))

export const databaseConfig = registerAs('database', () => ({
  port: Number(process.env.DATABASE_PORT ?? 5432)
}))
