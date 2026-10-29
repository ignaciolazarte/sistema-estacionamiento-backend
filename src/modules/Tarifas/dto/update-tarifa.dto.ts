import { PartialType } from '@nestjs/mapped-types';
import { CreateTarifaDto } from './create-tarifa.dto.js';

export class UpdateTarifaDto extends PartialType(CreateTarifaDto) {}
