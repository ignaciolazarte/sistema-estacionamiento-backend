import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVehiculoDto {
  @IsString()
  @IsNotEmpty()
  patente: string;

  @IsString()
  @IsNotEmpty()
  marca: string;

  @IsString()
  @IsNotEmpty()
  modelo: string;

}