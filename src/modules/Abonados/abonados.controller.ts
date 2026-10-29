import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AbonadosService } from './abonados.service.js';
import { CreateAbonadoDto } from './dto/create-abonado.dto.js';
import { UpdateAbonadoDto } from './dto/update-abonado.dto.js';

@Controller('abonados')
export class AbonadosController {
  constructor(private readonly abonadosService: AbonadosService) {}

  @Post()
  create(@Body() createAbonadoDto: CreateAbonadoDto) {
    return this.abonadosService.create(createAbonadoDto);
  }

  @Get()
  findAll() {
    return this.abonadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abonadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAbonadoDto: UpdateAbonadoDto) {
    return this.abonadosService.update(+id, updateAbonadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abonadosService.remove(+id);
  }
}
