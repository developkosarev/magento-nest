import { Inject, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Logger } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { CRON_SERVICE, NOTIFICATIONS_SERVICE } from '@app/common-nest';

@Injectable()
export class CronjobsService {
  constructor(
    //@Inject(NOTIFICATIONS_SERVICE) private notificationsService: ClientProxy,
    //@Inject(CRON_SERVICE) private readonly cronService: ClientProxy,
  ) {}

  @Cron('0 * * * * *')
  openForBusiness() {
    Logger.log('Delicious cakes is open for business...');
    const amount = 1;

    //this.notificationsService.emit('notify_email', {
    //  email: 'test@test',
    //  text: `Your payment $${amount} has completed successfully.`,
    //});
  }

  @Cron('*/5 * * * * *')
  takingOrders() {
    //console.log('Delicious cakes is still taking orders');
    Logger.log('Delicious cakes is still taking orders');
  }
}
