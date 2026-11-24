import { IsString, IsNotEmpty, IsEmail, IsDateString, IsBoolean, IsNumber} from 'class-validator';

export class CreateAbonadoDto {
  @IsString({ message: 'El DNI debe ser un texto.' })
  @IsNotEmpty({ message: 'El DNI es obligatorio.' })
  dni: string;

  @IsString({ message: 'El nombre debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre es obligatorio.' })
  nombre: string;

  @IsString({ message: 'El apellido debe ser un texto.' })
  @IsNotEmpty({ message: 'El apellido es obligatorio.' })
  apellido: string;

  @IsNumber({}, { message: 'El teléfono debe ser un número.' })
  @IsNotEmpty({ message: 'El teléfono es obligatorio.' })
  telefono: number;

  @IsEmail({}, { message: 'El email debe tener un formato válido.' })
  @IsNotEmpty({ message: 'El email es obligatorio.' })
  email: string;

  @IsDateString({}, { message: 'La fecha de alta debe tener un formato válido.' })
  @IsNotEmpty({ message: 'La fecha de alta es obligatoria.' })
  fecha_alta: string;

  @IsBoolean({ message: 'El estado activo debe ser verdadero o falso.' })
  @IsNotEmpty({ message: 'El estado activo es obligatorio.' })
  activo: boolean;
}