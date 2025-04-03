import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegionService {
  constructor(private prisma: PrismaService) {}

  async create(createRegionDto: CreateRegionDto) {
    try {
      const newRegions = await this.prisma.region.create({
        data: createRegionDto,
      });

      return { newRegions };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const Regions = await this.prisma.region.findMany();
      if (!Regions.length) return { message: 'Regions table are empty' };

      return { Regions };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: string) {
    try {
      const Region = await this.prisma.region.findFirst({ where: { id } });
      if (!Region) throw new NotFoundException('Region not found ❗');

      return { Region };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    try {
      const Region = await this.prisma.region.findFirst({ where: { id } });
      if (!Region) throw new NotFoundException('Region not found ❗');

      const newRegions = await this.prisma.region.update({
        data: updateRegionDto,
        where: { id },
      });

      return { newRegions };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const Region = await this.prisma.region.findFirst({ where: { id } });
      if (!Region) throw new NotFoundException('Region not found ❗');

      await this.prisma.region.delete({ where: { id } });
      return { message: 'Region is successfully deleted ✅' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
