import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppConfig, TypeOrmConfig } from '@/config'

import { TrainerModule } from '@trainer/trainer.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    ConfigModule.forRoot({ load: [AppConfig] }),
    TypeOrmModule.forRootAsync({ imports: [ConfigModule], useClass: TypeOrmConfig }),
    TrainerModule
  ]
})
export class AppModule {}
