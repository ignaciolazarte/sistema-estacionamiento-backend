import { PartialType } from '@nestjs/mapped-types';
import { CreateAccesoDto } from './create-acceso.dto.js';

export class UpdateAccesoDto extends PartialType(CreateAccesoDto) {}
