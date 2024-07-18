import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { BILLING_SERVICE } from '@app/common-nest';

@Injectable()
export class AppServiceRmq {
  constructor(
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  async getData() {
    await lastValueFrom(
      this.billingClient.emit('order_created', 1),
    );
  }
}
