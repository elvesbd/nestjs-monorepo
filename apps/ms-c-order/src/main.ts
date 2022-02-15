import { NestFactory } from '@nestjs/core';
import { MsCOrderModule } from './ms-c-orders.module';

async function bootstrap() {
  const app = await NestFactory.create(MsCOrderModule, {});
  await app.listen(3003);
}
bootstrap();
