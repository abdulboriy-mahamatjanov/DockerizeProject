import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRegionDto {
  @IsString({ message: 'Region Name must be a string ❗' })
  @ApiProperty({ example: 'Tashkent' })
  name: string;
}
