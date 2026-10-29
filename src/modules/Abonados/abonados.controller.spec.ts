import { Test, TestingModule } from '@nestjs/testing';
import { AbonadosController } from './abonados.controller.js';
import { AbonadosService } from './abonados.service.js';

describe('AbonadosController', () => {
  let controller: AbonadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbonadosController],
      providers: [AbonadosService],
    }).compile();

    controller = module.get<AbonadosController>(AbonadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
