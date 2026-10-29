import { Injectable } from '@nestjs/common';
import { CreateAbonadoDto } from './dto/create-abonado.dto.js';
import { UpdateAbonadoDto } from './dto/update-abonado.dto.js';

@Injectable()
export class AbonadosService {
  create(createAbonadoDto: CreateAbonadoDto) {
    return 'This action adds a new abonado';
  }

  findAll() {
    return `This action returns all abonados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} abonado`;
  }

  update(id: number, updateAbonadoDto: UpdateAbonadoDto) {
    return `This action updates a #${id} abonado`;
  }

  remove(id: number) {
    return `This action removes a #${id} abonado`;
  }
}
