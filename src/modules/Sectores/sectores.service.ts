import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateSectoreDto } from './dto/create-sectore.dto.js';
import { UpdateSectoreDto } from './dto/update-sectore.dto.js';

@Injectable()
export class SectoresService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSectoreDto: CreateSectoreDto) {
    return this.prisma.sectores.create({
      data: createSectoreDto,
    });
  }
  findAll() {
    return this.prisma.sectores.findMany({
      include: {
        tarifas: true,
      },
    });
  }
  findOne(id: number) {
    return this.prisma.sectores.findUnique({
      where: { id_sector: id },
      include: {
        tarifas: true,
      },
    });
  }
  update(id: number, updateSectoreDto: UpdateSectoreDto) {
    return this.prisma.sectores.update({
      where: { id_sector: id },
      data: updateSectoreDto,
    });
  }
  remove(id: number) {
    return this.prisma.sectores.delete({
      where: { id_sector: id },
    });
  }
}