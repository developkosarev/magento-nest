import { Inject, Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { ClientProxy } from '@nestjs/microservices';
import { CRON_SERVICE, NOTIFICATIONS_SERVICE } from '@app/common-nest';
import { NewsletterServiceReminder } from "./newsletter.service.reminder";

@Injectable()
export class NewsletterServiceCron {
  constructor(
    private readonly newsletterServiceReminder: NewsletterServiceReminder,
    //@Inject(NOTIFICATIONS_SERVICE) private notificationsService: ClientProxy,
    //@Inject(CRON_SERVICE) private readonly cronService: ClientProxy,
  ) {}

  @Cron('*/5 * * * * *')
  reminder() {
    this.newsletterServiceReminder.reminder()
  }
}
