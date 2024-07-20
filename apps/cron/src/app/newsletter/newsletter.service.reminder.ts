import { Inject, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';
import { CRON_SERVICE } from '@app/common-nest';

@Injectable()
export class NewsletterServiceReminder {
  constructor(
    @Inject('MATH_SERVICE') private readonly cronService: ClientProxy,
  ) {}

  reminder() {
    Logger.log('Newsletter reminder...');
    const amount = 44;
    this.cronService.emit('reminder_email_task', {
      email: 'reminder@test',
      text: `Reminder: Your payment $${amount} has completed successfully.`,
    });

    setTimeout(() => {
      Logger.log("Newsletter delayed for 5 second.");
    }, 5000);
  }

  getData(): { message: string } {
    return { message: 'Hello newsletter API' };
  }
}
