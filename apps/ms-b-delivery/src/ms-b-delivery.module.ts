import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { MsBDeliveryController } from './ms-b-delivery.controller';
import { MsBDeliveryService } from './ms-b-delivery.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'delivery',
          type: 'topic',
        },
      ],
      uri: 'amqps://bliusjly:ENcnqlBpupcKWGyas1YwhbdATaVnZz1g@hornet.rmq.cloudamqp.com/bliusjly',
    }),
    MsBDeliveryModule,
  ],
  controllers: [MsBDeliveryController],
  providers: [MsBDeliveryService],
})
export class MsBDeliveryModule {}
