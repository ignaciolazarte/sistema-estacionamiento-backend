import { Module } from '@nestjs/common';
import { AccesosService } from './accesos.service.js';
import { AccesosController } from './accesos.controller.js';

@Module({
  controllers: [AccesosController],
  providers: [AccesosService],
})
export class AccesosModule {}
