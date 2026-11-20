import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateTarifaDto } from './dto/create-tarifa.dto.js';
import { UpdateTarifaDto } from './dto/update-tarifa.dto.js';

@Injectable()
export class TarifasService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTarifaDto: CreateTarifaDto) {
    return this.prisma.tarifas.create({
      data: {
        tipo_vehiculo: createTarifaDto.tipo_vehiculo,
        precio_hora: createTarifaDto.precio_hora,
        precio_estadia: createTarifaDto.precio_estadia,
        precio_abono_mensual: createTarifaDto.precio_abono_mensual,
      },
    });
  }

  findAll() {
    return this.prisma.tarifas.findMany();
  }

  findOne(id: number) {
    return this.prisma.tarifas.findUnique({
      where: { id_tarifa: id },
    });
  }

  update(id: number, updateTarifaDto: UpdateTarifaDto) {
    return this.prisma.tarifas.update({
      where: { id_tarifa: id },
      data: updateTarifaDto,
    });
  }

  remove(id: number) {
    return this.prisma.tarifas.delete({
      where: { id_tarifa: id },
    });
  }
}