import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(body: {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: string;
  }) {
    const existe = await this.prisma.users.findUnique({
      where: { email: body.email },
    });
    if (existe) throw new ConflictException('El email ya está registrado');

    const hash = await bcrypt.hash(body.password, 10);

    await this.prisma.users.create({
      data: {
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        password_hash: hash,
        rol: body.rol,
      },
    });

    return { message: 'Usuario registrado correctamente' };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.users.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Credenciales inválidas');

    const coincide = await bcrypt.compare(password, user.password_hash);
    if (!coincide) throw new UnauthorizedException('Credenciales inválidas');

    const token = await this.jwtService.signAsync({
      sub: user.id_user,
      email: user.email,
      rol: user.rol,
    });
    return { access_token: token };
  }
}