import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common-nest';

//import { AppModule } from './app/app.module';
import { CronModule } from './cron/cron.module';

async function bootstrap() {
  const app = await NestFactory.create(CronModule);

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('CRON'));

  await app.startAllMicroservices();

  const globalPrefix = 'api/newsletter';
  app.setGlobalPrefix(globalPrefix);

  const port = process.env.PORT || 3002;
  await app.listen(port);
  Logger.log(`🚀 Newsletter is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
