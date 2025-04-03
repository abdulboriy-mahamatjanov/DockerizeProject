import { PartialType } from '@nestjs/mapped-types';
import { CreateRegionDto } from './create-region.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateRegionDto extends PartialType(CreateRegionDto) {
  @IsString({ message: 'Region Name must be a string ❗' })
  @ApiProperty({ example: 'Namangan' })
  name: string;
}
