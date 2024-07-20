import { Module } from '@nestjs/common';
import { NewsletterServiceCron } from "./newsletter.service.cron";
import { NewsletterServiceReminder } from "./newsletter.service.reminder";
import { CRON_SERVICE, RmqModule } from "@app/common-nest";

import { NewsletterController } from "./newsletter.controller";

import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  //imports: [
  //  RmqModule.register({
  //    name: CRON_SERVICE,
  //  }),
  //],
  imports: [
    ClientsModule.register([
      {
        name: 'MATH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://magento:magento@192.168.0.74:5672'],
          queue: 'cron',
          persistent: true,
          //queueOptions: {
          //  durable: false
          //},
        },
      },
    ]),
  ],
  controllers: [NewsletterController],
  providers: [
    NewsletterServiceCron,
    NewsletterServiceReminder
  ],
})
export class NewsletterModule {}
