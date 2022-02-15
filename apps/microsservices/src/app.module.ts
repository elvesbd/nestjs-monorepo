import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
      uri: process.env.RABBITMQ_URI,
    }),
    AppModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
