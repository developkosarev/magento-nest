import { Module } from '@nestjs/common';
import { NewsletterServiceCron } from "./newsletter.service.cron";
import { NewsletterServiceReminder } from "./newsletter.service.reminder";
import { CRON_SERVICE, RmqModule } from "@app/common-nest";

import { NewsletterController } from "./newsletter.controller";

@Module({
  imports: [
    RmqModule.register({
      name: CRON_SERVICE,
    }),
  ],
  controllers: [NewsletterController],
  providers: [
    NewsletterServiceCron,
    NewsletterServiceReminder
  ],
})
export class NewsletterModule {}
