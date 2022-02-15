import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    /* ClientsModule.register([
      {
        name: 'ANIMALS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://bliusjly:ENcnqlBpupcKWGyas1YwhbdATaVnZz1g@hornet.rmq.cloudamqp.com/bliusjly',
          ],
          queue: 'mailbox',
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: 'COUNTRIES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://bliusjly:ENcnqlBpupcKWGyas1YwhbdATaVnZz1g@hornet.rmq.cloudamqp.com/bliusjly',
          ],
          queue: 'mailbox',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]), */
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'orders',
          type: 'topic',
        },
        {
          name: 'stock',
          type: 'topic',
        },
        {
          name: 'delivery',
          type: 'topic',
        },
      ],
      uri: 'amqps://bliusjly:ENcnqlBpupcKWGyas1YwhbdATaVnZz1g@hornet.rmq.cloudamqp.com/bliusjly',
    }),
    AppModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
