import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { MsBDeliveryService } from './ms-b-delivery.service';

@Controller()
export class MsBDeliveryController {
  constructor(private readonly msBDeliveryService: MsBDeliveryService) {}
}
