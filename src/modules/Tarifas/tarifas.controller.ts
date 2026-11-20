import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { TarifasService } from './tarifas.service.js';
import { CreateTarifaDto } from './dto/create-tarifa.dto.js';
import { UpdateTarifaDto } from './dto/update-tarifa.dto.js';

@Controller('tarifas')
export class TarifasController {
  constructor(private readonly tarifasService: TarifasService) {}

  @Post()
  create(@Body() createTarifaDto: CreateTarifaDto) {
    return this.tarifasService.create(createTarifaDto);
  }

  @Get()
  findAll() {
    return this.tarifasService.findAll();
  
  return 'ESTE ES EL CONTROLLER DE TARIFAS CORRECTO';
}
  

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tarifasService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTarifaDto: UpdateTarifaDto,
  ) {
    return this.tarifasService.update(id, updateTarifaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tarifasService.remove(id);
  }
}