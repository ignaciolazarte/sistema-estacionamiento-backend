import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
} from 'class-validator';

export class CreateVehiculoDto {
  @IsString({ message: 'La patente debe ser un texto.' })
  @IsNotEmpty({ message: 'La patente es obligatoria.' })
  patente: string;

  @IsString({ message: 'La marca debe ser un texto.' })
  @IsNotEmpty({ message: 'La marca es obligatoria.' })
  marca: string;

  @IsString({ message: 'El modelo debe ser un texto.' })
  @IsNotEmpty({ message: 'El modelo es obligatorio.' })
  modelo: string;

  @IsInt({ message: 'La tarifa debe ser un número entero.' })
  id_tarifa: number;

  @IsOptional()
  @IsInt({ message: 'El abonado debe ser un número entero.' })
  id_abonado?: number;
}
