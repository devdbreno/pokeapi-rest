import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from '@/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.enableCors()

  app.useGlobalPipes(new ValidationPipe())

  const configService = app.get(ConfigService)

  const port = configService.get('server.port') ?? 3030

  await app.listen(port)
}

bootstrap()
