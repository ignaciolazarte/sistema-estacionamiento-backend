
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto.js';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto.js';
type Prueba = CreateVehiculoDto['id_tarifa'];

@Injectable()
export class VehiculosService {
  constructor(private readonly prisma: PrismaService) {}

  create(createVehiculoDto: CreateVehiculoDto) {
  return this.prisma.vehiculos.create({
    data: {
      patente: createVehiculoDto.patente,
      marca: createVehiculoDto.marca,
      modelo: createVehiculoDto.modelo,
      id_tarifa: createVehiculoDto.id_tarifa,
      id_abonado: createVehiculoDto.id_abonado,
    },
  });
}
  findAll() {
  return this.prisma.vehiculos.findMany();
}
  findOne(id: number) {
    return this.prisma.vehiculos.findUnique({
      where: { id_vehiculo: id },
      include: {
        abonados: true,
        tarifas: true,
      },
    });
  }

  update(id: number, updateVehiculoDto: UpdateVehiculoDto) {
    return this.prisma.vehiculos.update({
      where: { id_vehiculo: id },
      data: updateVehiculoDto,
    });
  }

  remove(id: number) {
    return this.prisma.vehiculos.delete({
      where: { id_vehiculo: id },
    });
  }
}

