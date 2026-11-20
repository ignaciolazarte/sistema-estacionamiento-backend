
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
  @Min(0)
  precio_hora: number;

  @IsNumber({}, { message: 'El precio por estadía debe ser un número.' })
  @Min(0)
  precio_estadia: number;

  @IsNumber({}, { message: 'El precio del abono mensual debe ser un número.' })
  @Min(0)
  precio_abono_mensual: number;
}

