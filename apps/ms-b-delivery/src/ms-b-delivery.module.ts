import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MsBDeliveryController } from './ms-b-delivery.controller';
import { MsBDeliveryService } from './ms-b-delivery.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'delivery',
          type: 'topic',
        },
      ],
      uri: process.env.RABBITMQ_URI,
    }),
    MsBDeliveryModule,
  ],
  controllers: [MsBDeliveryController],
  providers: [MsBDeliveryService],
})
export class MsBDeliveryModule {}
