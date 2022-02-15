import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MsCOrdersController } from './ms-c-orders.controller';
import { MsCOrdersService } from './ms-c-orders.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'orders',
          type: 'topic',
        },
      ],
      uri: process.env.RABBITMQ_URI,
    }),
    MsCOrderModule,
  ],
  controllers: [MsCOrdersController],
  providers: [MsCOrdersService],
})
export class MsCOrderModule {}
