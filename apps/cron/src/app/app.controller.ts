import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { AppServiceRmq } from './app.service.rmq';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly appServiceRmq: AppServiceRmq
  ) {}

  @Get()
  async getData() {
    await this.appServiceRmq.getData();
    return this.appService.getData();
  }
}
