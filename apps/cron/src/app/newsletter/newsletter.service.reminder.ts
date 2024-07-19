import { Inject, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { CRON_SERVICE, NOTIFICATIONS_SERVICE } from '@app/common-nest';

@Injectable()
export class NewsletterServiceReminder {
  reminder() {
    Logger.log('News letter reminder...');
  }
}
