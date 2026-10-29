import { Test, TestingModule } from '@nestjs/testing';
import { AbonadosService } from './abonados.service.js';

describe('AbonadosService', () => {
  let service: AbonadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbonadosService],
    }).compile();

    service = module.get<AbonadosService>(AbonadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
