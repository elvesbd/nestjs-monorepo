import { Test, TestingModule } from '@nestjs/testing';
import { MsBDeliveryController } from './ms-b-delivery.controller';
import { MsBDeliveryService } from './ms-b-delivery.service';

describe('MicroserviceBController', () => {
  let msBDeliveryController: MsBDeliveryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsBDeliveryController],
      providers: [MsBDeliveryService],
    }).compile();

    msBDeliveryController = app.get<MsBDeliveryController>(
      MsBDeliveryController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msBDeliveryController.getHello()).toBe('Hello World!');
    });
  });
});
