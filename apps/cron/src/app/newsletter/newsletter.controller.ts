import { Controller, Get } from '@nestjs/common';

import { NewsletterServiceReminder } from "./newsletter.service.reminder";

@Controller('newsletter')
export class NewsletterController {
  constructor(
    private readonly newsletterServiceReminder: NewsletterServiceReminder
  ) {}

  @Get()
  async getData() {
    this.newsletterServiceReminder.reminder();
    return this.newsletterServiceReminder.getData();
  }
}
