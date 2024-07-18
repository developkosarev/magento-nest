import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import * as Joi from 'joi';

import { RmqModule } from '@app/common-nest';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppServiceRmq } from './app.service.rmq';

import { CronjobsModule } from './cronjobs/cronjobs.module';

import { CRON_SERVICE, BILLING_SERVICE, NOTIFICATIONS_SERVICE } from '@app/common-nest';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CronjobsServiceNotifications } from "./cronjobs/cronjobs.service.notifications";

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
    //RmqModule,
    RmqModule.register({
      name: CRON_SERVICE,
    }),
    RmqModule.register({
      name: BILLING_SERVICE,
    }),
    ClientsModule.registerAsync([
      {
        name: NOTIFICATIONS_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBIT_MQ_URI')],
            queue: 'notifications',
            queueOptions: {
              durable: false
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, AppServiceRmq, CronjobsServiceNotifications],
})
export class AppModule {}
