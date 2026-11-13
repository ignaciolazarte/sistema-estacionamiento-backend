import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { SectoresService } from './sectores.service.js';
import { CreateSectoreDto } from './dto/create-sectore.dto.js';
import { UpdateSectoreDto } from './dto/update-sectore.dto.js';

@Controller('sectores')
export class SectoresController {
  constructor(private readonly sectoresService: SectoresService) {}

  @Post()
  create(@Body() createSectoreDto: CreateSectoreDto) {
    return this.sectoresService.create(createSectoreDto);
  }

  @Get()
  findAll() {
    return this.sectoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sectoresService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSectoreDto: UpdateSectoreDto,
  ) {
    return this.sectoresService.update(id, updateSectoreDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.sectoresService.remove(id);
  }
}