import { Inject, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

//import { ClientProxy } from '@nestjs/microservices';
//import { NOTIFICATIONS_SERVICE } from '@app/common-nest';


@Injectable()
export class CronjobsService {
  //constructor(
  //  @Inject(NOTIFICATIONS_SERVICE) private readonly notificationsService: ClientProxy,
  //) {}

  @Cron('0 * * * * *')
  openForBusiness() {
    console.log('Delicious cakes is open for business...');
    //const amount = 1;
    //
    //this.notificationsService.emit('notify_email', {
    //  email: 'test@test',
    //  text: `Your payment $${amount} has completed successfully.`,
    //});
  }

  @Cron('*/5 * * * * *')
  takingOrders() {
    console.log('Delicious cakes is still taking orders');
  }
}
