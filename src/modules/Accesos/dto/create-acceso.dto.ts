import { Type } from 'class-transformer';
import{IsString, IsNotEmpty, IsDateString, IsBoolean, IsNumber, IsOptional, IsPositive} from 'class-validator';

export class CreateAccesoDto {
  @IsDateString({}, { message: 'La fecha y hora de entrada deben tener un formato válido.' })
  @IsNotEmpty({ message: 'La fecha y hora de entrada son obligatorias.' })
  fecha_hora_entrada: string;

  @IsDateString({}, { message: 'La fecha y hora de salida deben tener un formato válido.' })
  @IsOptional()
  fecha_hora_salida: string;

  @Type(() => Number)
  @IsNumber({}, { message: 'El monto cobrado debe ser un número.' })
  @IsPositive({ message: 'El monto cobrado debe ser mayor que cero.' })
  @IsOptional()
  monto_cobrado: number;

  @IsString({ message: 'El estado debe ser un texto.' })
  @IsNotEmpty({ message: 'El estado es obligatorio.' })
  estado: string;
}