import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { NOTIFICATIONS_SERVICE } from '@app/common-nest';

@Injectable()
export class CronjobsServiceNotifications {
  constructor(
    @Inject(NOTIFICATIONS_SERVICE) private notificationsService: ClientProxy,
  ) {}

  async getData() {
    await lastValueFrom(
      this.notificationsService.emit('notify_email', {email: 'test@test.com', text: 'Text'}),
    );
  }
}
