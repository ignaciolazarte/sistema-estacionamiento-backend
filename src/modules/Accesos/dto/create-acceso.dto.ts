import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsNumber,
  IsOptional,
  IsPositive,
  IsInt,
} from 'class-validator';

export class CreateAccesoDto {
  @Type(() => Number)
  @IsInt()
  id_vehiculo: number;

  @Type(() => Number)
  @IsInt()
  id_sector: number;

  @Type(() => Number)
  @IsInt()
  id_user_operador: number;

  @IsDateString({}, {
    message: 'La fecha y hora de entrada deben tener un formato válido.',
  })
  @IsNotEmpty()
  fecha_hora_entrada: string;

  @IsDateString({}, {
    message: 'La fecha y hora de salida deben tener un formato válido.',
  })
  @IsOptional()
  fecha_hora_salida?: string;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @IsOptional()
  monto_cobrado?: number;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
