import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { serverConfig, databaseConfig } from '@/config'

import { TrainerModule } from '@trainer/trainer.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [serverConfig, databaseConfig]
    }),
    TrainerModule
  ]
})
export class AppModule {}
