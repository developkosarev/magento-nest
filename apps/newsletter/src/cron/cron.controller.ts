import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

import { RmqService } from '@app/common-nest';
import { CronService } from './cron.service';
import { NotifyEmailDto } from "./dto/notify-email.dto";

@Controller()
export class CronController {
  constructor(
    private readonly rmqService: RmqService,
    private readonly cronService: CronService
  ) {}

  @Get()
  async getData() {
    return 'ok';
  }

  @EventPattern('reminder_email_task')
  async notifyEmail(@Payload() data: NotifyEmailDto, @Ctx() context: RmqContext) {
    //console.log(1111)
    //console.log(data)
    //console.log(context)

    this.cronService.notifyEmail(data);

    this.rmqService.ack(context);
  }
}
