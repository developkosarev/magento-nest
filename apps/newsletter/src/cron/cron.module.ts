import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { CronController } from "./cron.controller";
import { CronService } from './cron.service';
import { CRON_SERVICE, RmqModule } from "@app/common-nest";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required()
      }),
    }),
    RmqModule.register({ name: CRON_SERVICE }),
  ],
  controllers: [CronController],
  providers: [CronService],
})
export class CronModule {}
