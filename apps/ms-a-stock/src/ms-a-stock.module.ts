import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MsAStockController } from './ms-a-stock.controller';
import { databaseProviders } from './ms-a-stock.database.provider';
import { modelProviders } from './ms-a-stock.model.provider';
import { MsAStockService } from './ms-a-stock.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'stock',
          type: 'topic',
        },
      ],
      uri: process.env.RABBITMQ_URI,
    }),
    MsAStockModule,
  ],
  controllers: [MsAStockController],
  providers: [MsAStockService, ...databaseProviders, ...modelProviders],
})
export class MsAStockModule {}
