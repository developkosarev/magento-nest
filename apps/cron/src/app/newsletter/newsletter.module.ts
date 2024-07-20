import { Module } from '@nestjs/common';
import { NewsletterServiceCron } from "./newsletter.service.cron";
import { NewsletterServiceReminder } from "./newsletter.service.reminder";
import { CRON_SERVICE, RmqModule } from "@app/common-nest";

@Module({
  imports: [
    RmqModule.register({
      name: CRON_SERVICE,
    }),
  ],
  providers: [
    NewsletterServiceCron,
    NewsletterServiceReminder
  ],
})
export class NewsletterModule {}
