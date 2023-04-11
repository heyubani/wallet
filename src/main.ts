import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { WalletModule } from './api/modules/wallet.module';

async function bootstrap() {
  const app = await NestFactory.create(WalletModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api/v1');
  await app.listen(4000);
}
bootstrap();
