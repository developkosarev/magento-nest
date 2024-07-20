import {Controller, Get} from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

import { RmqService } from '@app/common-nest';

@Controller()
export class CronController {
  constructor(
    private readonly rmqService: RmqService
  ) {}

  @Get()
  async getData() {
    return 'ok';
  }

  @EventPattern('reminder_email_task')
  async notifyEmail(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(1111)
    this.rmqService.ack(context);
  }
}
