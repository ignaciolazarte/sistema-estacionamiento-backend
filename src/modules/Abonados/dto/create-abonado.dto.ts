import { IsString, IsNotEmpty, IsEmail, IsDateString, IsBoolean, IsNumber} from 'class-validator';

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

  @IsNumber()
  @IsNotEmpty()
  telefono: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_alta: string;

  @IsBoolean()
  @IsNotEmpty()
  activo: boolean;
}