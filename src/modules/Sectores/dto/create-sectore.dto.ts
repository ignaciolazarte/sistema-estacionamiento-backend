import { IsString, IsNotEmpty, IsInt, IsPositive } from "class-validator";

export class CreateSectoreDto {
  @IsString()
  @IsNotEmpty()
  nombre_del_sector: string;

  @IsInt()
  @IsNotEmpty()
  piso: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  capacidad_maxima: number;
  
}
