
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateAbonadoDto } from './dto/create-abonado.dto.js';
import { UpdateAbonadoDto } from './dto/update-abonado.dto.js';

@Injectable()
export class AbonadosService {
  constructor(private readonly prisma: PrismaService) {}

  create(createAbonadoDto: CreateAbonadoDto) {
    return this.prisma.abonados.create({
      data: createAbonadoDto,
    });
  }

  findAll() {
    return this.prisma.abonados.findMany();
  }

  findOne(id: number) {
    return this.prisma.abonados.findUnique({
      where: { id_abonado: id },
    });
  }

  update(id: number, updateAbonadoDto: UpdateAbonadoDto) {
    return this.prisma.abonados.update({
      where: { id_abonado: id },
      data: updateAbonadoDto,
    });
  }

  remove(id: number) {
    return this.prisma.abonados.delete({
      where: { id_abonado: id },
    });
  }
}


