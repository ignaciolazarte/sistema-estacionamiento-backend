import {
  IsString,
  IsNotEmpty,
  IsInt,
  Min,
} from 'class-validator';

export class CreateSectoreDto {
  @IsString({ message: 'El nombre del sector debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre del sector es obligatorio.' })
  nombre_sector: string;

  @IsInt({ message: 'El piso debe ser un número entero.' })
  piso: number;

  @IsInt({ message: 'La capacidad máxima debe ser un número entero.' })
  @Min(1)
  capacidad_maxima: number;

  @IsInt({ message: 'La tarifa permitida debe ser un número entero.' })
  id_tarifa_permitida: number;
}

