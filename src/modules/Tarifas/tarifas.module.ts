import { Module } from '@nestjs/common';
import { TarifasService } from './tarifas.service.js';
import { TarifasController } from './tarifas.controller.js';

@Module({
  controllers: [TarifasController],
  providers: [TarifasService],
})
export class TarifasModule {}
