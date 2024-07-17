import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import * as Joi from 'joi';
import { RmqModule } from '@app/common-nest';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CronjobsModule } from './cronjobs/cronjobs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string().required(),
      }),
    }),

    ScheduleModule.forRoot(),
    CronjobsModule,
    RmqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
