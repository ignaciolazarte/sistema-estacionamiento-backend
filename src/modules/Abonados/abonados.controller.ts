import {Controller,Get,  Post,  Put,  Delete,  Body,  Param,  ParseIntPipe,} from '@nestjs/common';
import { AbonadosService } from './abonados.service.js';
import { CreateAbonadoDto } from './dto/create-abonado.dto.js';

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
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.abonadosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAbonadoDto: CreateAbonadoDto,
  ) {
    return this.abonadosService.update(id, updateAbonadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.abonadosService.remove(id);
  }
}