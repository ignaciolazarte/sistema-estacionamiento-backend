import { Type } from 'class-transformer';
import{IsString, IsNotEmpty, IsDateString, IsBoolean, IsNumber, IsOptional, IsPositive} from 'class-validator';

export class CreateAccesoDto {
  @IsDateString()
  @IsNotEmpty()
  fecha_hora_entrada: string;

  @IsDateString()
  @IsOptional()
  fecha_hora_salida: string;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  @IsOptional()
  monto_cobrado: number;

  @IsString()
  @IsNotEmpty()
  estado: string;
}