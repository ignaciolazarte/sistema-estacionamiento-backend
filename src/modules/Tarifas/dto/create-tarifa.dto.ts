import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateTarifaDto {
  @IsString({ message: 'El tipo de vehículo debe ser un texto.' })
  @IsNotEmpty({ message: 'El tipo de vehículo es obligatorio.' })
  tipo_vehiculo: string;

  @IsNumber({}, { message: 'El precio por hora debe ser un número.' })
  @Min(0, { message: 'El precio por hora no puede ser negativo.' })
  precio_hora: number;

  @IsNumber({}, { message: 'El precio por estadía debe ser un número.' })
  @Min(0, { message: 'El precio por estadía no puede ser negativo.' })
  precio_estadia: number;

  @IsNumber({}, { message: 'El precio del abono mensual debe ser un número.' })
  @Min(0, { message: 'El precio del abono mensual no puede ser negativo.' })
  precio_abono_mensual: number;
}
