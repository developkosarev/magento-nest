import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronjobsService {
  @Cron('0 * * * * *')
  openForBusiness() {
    console.log('Delicious cakes is open for business...');
  }

  @Cron('*/5 * * * * *')
  takingOrders() {
    console.log('Delicious cakes is still taking orders');
  }
}
