import {Controller,Get,Post,Put,Delete,Body,Param,ParseIntPipe,} from '@nestjs/common';
import { AccesosService } from './accesos.service.js';
import { CreateAccesoDto } from './dto/create-acceso.dto.js';

@Controller('accesos')
export class AccesosController {
  constructor(private readonly accesosService: AccesosService) {}

  @Post()
  create(@Body() createAccesoDto: CreateAccesoDto) {
    return this.accesosService.create(createAccesoDto);
  }

  @Get()
  findAll() {
    return this.accesosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.accesosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAccesoDto: CreateAccesoDto,
  ) {
    return this.accesosService.update(id, updateAccesoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.accesosService.remove(id);
  }
}