import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { CronController } from "./cron.controller";
import { CronService } from './cron.service';
import { CRON_SERVICE, RmqModule } from "@app/common-nest";

@Module({
  imports: [
    /*Validation .env*/
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_CRON_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule.register({
      name: CRON_SERVICE
    }),
  ],
  controllers: [CronController],
  providers: [CronService],
})
export class CronModule {}
