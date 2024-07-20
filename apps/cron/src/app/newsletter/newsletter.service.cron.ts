import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { NewsletterServiceReminder } from "./newsletter.service.reminder";

@Injectable()
export class NewsletterServiceCron {
  constructor(
    private readonly newsletterServiceReminder: NewsletterServiceReminder
  ) {}

  @Cron('*/5 * * * * *')
  reminder() {
    this.newsletterServiceReminder.reminder()
  }
}
