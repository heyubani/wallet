import { NestFactory } from '@nestjs/core';
// import { ValidationPipe } from '@nestjs/common';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import { WalletModule } from './wallet.module';

async function bootstrap() {
  const app = await NestFactory.create(WalletModule);
  app.useGlobalPipes(new ValidateInputPipe());
  app.setGlobalPrefix('/api/v1');
  await app.listen(4000);
}
bootstrap();
