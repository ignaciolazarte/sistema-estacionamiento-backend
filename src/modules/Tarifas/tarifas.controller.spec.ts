import { Test, TestingModule } from '@nestjs/testing';
import { TarifasController } from './tarifas.controller.js';
import { TarifasService } from './tarifas.service.js';

describe('TarifasController', () => {
  let controller: TarifasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TarifasController],
      providers: [TarifasService],
    }).compile();

    controller = module.get<TarifasController>(TarifasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
