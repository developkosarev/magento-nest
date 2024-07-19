import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import {BILLING_SERVICE, CRON_SERVICE} from '@app/common-nest';

@Injectable()
export class AppServiceRmq {
  constructor(
    @Inject(CRON_SERVICE) private cronService: ClientProxy,
    //@Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  async getData() {
    await lastValueFrom(
      //this.billingClient.emit('order_created', 1),
      this.cronService.emit('cron_new_task_created', 1),
    );
  }
}
