import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CRON_SERVICE, NOTIFICATIONS_SERVICE } from '@app/common-nest';

@Injectable()
export class CronjobsServiceNotifications {
  constructor(
    //@Inject(NOTIFICATIONS_SERVICE) private notificationsService: ClientProxy,
    //@Inject(CRON_SERVICE) private readonly cronService: ClientProxy,
  ) {}

  async getData() {
    //await lastValueFrom(
    //  this.notificationsService.emit('notify_email', {email: 'test@test.com', text: 'Text'})
    //);

    //await this.cronService.emit('notify_email', {email: 'test@test.com', text: 'Text'})
  }
}
