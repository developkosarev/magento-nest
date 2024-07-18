import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NotifyEmailDto } from './dto/notify-email.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly configService: ConfigService) {}

  notifyEmail({ email, text }: NotifyEmailDto) {
    const rmq = this.configService.get('RABBIT_MQ_URI')

    console.log(email)
    console.log(rmq)
  }
}
