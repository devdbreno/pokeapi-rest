import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'

import { AppModule } from '@/app.module'
import { serverConfig } from '@/config'

const logger = new Logger('Entrypoint')
const appConfig = serverConfig()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(appConfig.port, appConfig.host)

  logger.log(`Listenning at: ${await app.getUrl()}`)
}

bootstrap()
