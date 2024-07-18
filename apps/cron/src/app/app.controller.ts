import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { AppServiceRmq } from './app.service.rmq';

import { CronjobsServiceNotifications } from './cronjobs/cronjobs.service.notifications';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appServiceRmq: AppServiceRmq,
    private readonly cronjobsServiceNotifications: CronjobsServiceNotifications
  ) {}

  @Get()
  async getData() {
    //await this.appServiceRmq.getData();
    await this.cronjobsServiceNotifications.getData();

    return this.appService.getData();
  }
}
