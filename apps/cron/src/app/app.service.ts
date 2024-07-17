import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { BILLING_SERVICE } from './constants/services';

@Injectable()
export class AppService {
  constructor(
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  //async getData(): { message: string } {

  async getData() {

    await lastValueFrom(
      this.billingClient.emit('order_created', 1),
    );


    //return { message: 'Hello API' };
  }
}
