import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

// Campos que se devuelven (sin la contraseña)
const camposPublicos = {
  id_user: true,
  nombre: true,
  apellido: true,
  email: true,
  rol: true,
  activo: true,
};

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hash = await bcrypt.hash(createUserDto.password_hash, 10);
    return this.prisma.users.create({
      data: { ...createUserDto, password_hash: hash },
      select: camposPublicos,
    });
  }

  findAll() {
    return this.prisma.users.findMany({ select: camposPublicos });
  }

  async findOne(id: number) {
    const user = await this.prisma.users.findUnique({
      where: { id_user: id },
      select: camposPublicos,
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data: UpdateUserDto = { ...updateUserDto };
    if (data.password_hash) {
      data.password_hash = await bcrypt.hash(data.password_hash, 10);
    }
    return this.prisma.users.update({
      where: { id_user: id },
      data,
      select: camposPublicos,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({
      where: { id_user: id },
      select: camposPublicos,
    });
  }
}