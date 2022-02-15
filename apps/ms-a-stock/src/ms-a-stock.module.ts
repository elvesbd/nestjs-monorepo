import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { MsAStockController } from './ms-a-stock.controller';
import { databaseProviders } from './ms-a-stock.database.provider';
import { modelProviders } from './ms-a-stock.model.provider';
import { MsAStockService } from './ms-a-stock.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'stock',
          type: 'topic',
        },
      ],
      uri: 'amqps://bliusjly:ENcnqlBpupcKWGyas1YwhbdATaVnZz1g@hornet.rmq.cloudamqp.com/bliusjly',
    }),
    MsAStockModule,
  ],
  controllers: [MsAStockController],
  providers: [MsAStockService, ...databaseProviders, ...modelProviders],
})
export class MsAStockModule {}
