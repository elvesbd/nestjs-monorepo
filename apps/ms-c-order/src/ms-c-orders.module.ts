import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { MsCOrdersController } from './ms-c-orders.controller';
import { MsCOrdersService } from './ms-c-orders.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'orders',
          type: 'topic',
        },
      ],
      uri: 'amqps://bliusjly:ENcnqlBpupcKWGyas1YwhbdATaVnZz1g@hornet.rmq.cloudamqp.com/bliusjly',
    }),
    MsCOrderModule,
  ],
  controllers: [MsCOrdersController],
  providers: [MsCOrdersService],
})
export class MsCOrderModule {}
