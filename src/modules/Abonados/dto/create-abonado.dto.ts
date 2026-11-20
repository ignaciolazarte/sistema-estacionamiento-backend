
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsDateString,
  IsBoolean,
  IsOptional,
} from 'class-validator';

export class CreateAbonadoDto {
  @IsString()
  @IsNotEmpty()
  dni: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsDateString()
  fecha_alta?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}

