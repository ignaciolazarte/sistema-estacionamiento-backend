import { Module } from '@nestjs/common';
import { AbonadosService } from './abonados.service.js';
import { AbonadosController } from './abonados.controller.js';

@Module({
  controllers: [AbonadosController],
  providers: [AbonadosService],
})
export class AbonadosModule {}
