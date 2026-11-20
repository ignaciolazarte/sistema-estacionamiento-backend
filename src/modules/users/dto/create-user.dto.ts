import { IsString, IsNotEmpty, IsEmail, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  nombre: string;

  @IsString({ message: 'El apellido debe ser un texto.' })
  @IsNotEmpty({ message: 'El apellido es obligatorio.' })
  apellido: string;

  @IsEmail({}, { message: 'El email debe tener un formato válido.' })
  @IsNotEmpty({ message: 'El email es obligatorio.' })
  email: string;

  @IsString({ message: 'La contraseña debe ser un texto.' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria.' })
  password_hash: string;

  @IsString({ message: 'El rol debe ser un texto.' })
  @IsNotEmpty({ message: 'El rol es obligatorio.' })
  rol: string;

  @IsBoolean({ message: 'El estado activo debe ser verdadero o falso.' })
  @IsNotEmpty({ message: 'El estado activo es obligatorio.' })
  activo: boolean;
}