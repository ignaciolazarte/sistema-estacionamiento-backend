import { IsString, IsNotEmpty, IsInt, IsPositive } from "class-validator";

export class CreateSectoreDto {
  @IsString({ message: 'El nombre del sector debe ser un texto.' })
  @IsNotEmpty({ message: 'El nombre del sector es obligatorio.' })
  nombre_del_sector: string;

  @IsInt({ message: 'El piso debe ser un número entero.' })
  @IsNotEmpty({ message: 'El piso es obligatorio.' })
  piso: number;

  @IsInt({ message: 'La capacidad máxima debe ser un número entero.' })
  @IsNotEmpty({ message: 'La capacidad máxima es obligatoria.' })
  @IsPositive({ message: 'La capacidad máxima debe ser mayor que cero.' })
  capacidad_maxima: number;
  
}
