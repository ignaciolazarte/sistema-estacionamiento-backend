import { IsString, IsNotEmpty } from 'class-validator';

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

}