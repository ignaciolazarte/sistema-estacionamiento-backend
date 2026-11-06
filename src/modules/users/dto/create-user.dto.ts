import { IsString, IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password_hash: string;

  @IsString()
  @IsNotEmpty()
  rol: string;

  @IsBoolean()
  @IsNotEmpty()
  activo: boolean;
}