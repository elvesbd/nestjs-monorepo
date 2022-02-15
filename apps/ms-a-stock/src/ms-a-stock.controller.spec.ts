import { Test, TestingModule } from '@nestjs/testing';
import { MsAStockController } from './ms-a-stock.controller';
import { MsAStockService } from './ms-a-stock.service';

describe('MicroserviceAController', () => {
  let msAStockController: MsAStockController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsAStockController],
      providers: [MsAStockService],
    }).compile();

    msAStockController = app.get<MsAStockController>(MsAStockController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msAStockController.getHello()).toBe('Hello World!');
    });
  });
});
