import { Module } from '@nestjs/common';
import { NewsletterServiceCron } from "./newsletter.service.cron";
import { NewsletterServiceReminder } from "./newsletter.service.reminder";

@Module({
  providers: [
    NewsletterServiceCron,
    NewsletterServiceReminder
  ],
})
export class NewsletterModule {}
