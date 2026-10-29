import { PartialType } from '@nestjs/mapped-types';
import { CreateAbonadoDto } from './create-abonado.dto.js';

export class UpdateAbonadoDto extends PartialType(CreateAbonadoDto) {}
