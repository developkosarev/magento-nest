import {Controller, Get} from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class CronController {

  @Get()
  async getData() {
    return 'ok';
  }

  @EventPattern('reminder_email_task')
  async notifyEmail(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(1111)
  }
}
