import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './cat.dto';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';
// import { Request } from 'express';

@Controller('cats')
export class CatController {
  public constructor(private readonly catService: CatService) {}

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id): Promise<Cat | null> {
    // @Param() params => params.id
    return this.catService.findOne(id);
  }

  @Post()
  async createOne(@Body() createCatDto: CreateCatDto) {
    return this.catService.createOne(createCatDto);
  }

  @Put('/:id')
  async updateOne(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return { id, updateCatDto };
  }

  @Delete('/:id')
  async deleteOne(@Param('id') id) {
    return `Delete ${id}`;
  }
}
