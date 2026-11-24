
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateAccesoDto } from './dto/create-acceso.dto.js';
import { UpdateAccesoDto } from './dto/update-acceso.dto.js';

@Injectable()
export class AccesosService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAccesoDto: CreateAccesoDto) {
    return this.prisma.accesos.create({
      data: createAccesoDto,
    });
  }
 findAll() {

  return this.prisma.accesos.findMany({
    include: {
      vehiculos: true,
      sectores: true,
      users: true,
    },
  });
}
  findOne(id: number) {
    return this.prisma.accesos.findUnique({
      where: { id_acceso: id },
      include: {
        vehiculos: true,
        sectores: true,
        users: true,
      },
    });
  }
  update(id: number, updateAccesoDto: UpdateAccesoDto) {
    return this.prisma.accesos.update({
      where: { id_acceso: id },
      data: updateAccesoDto,
    });
  }
  remove(id: number) {
    return this.prisma.accesos.delete({
      where: { id_acceso: id },
    });
  }
}
