import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat';
import CreateCat from './CreateCat.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Nestjs Cats API')
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  async create(@Body() createCat: CreateCat) {
    this.catsService.addCat(createCat);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cats' })
  async getAll(): Promise<Cat[]> {
    return this.catsService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a cat by id' })
  async getById(@Param('id') id: number) {
    return this.catsService.getById(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a cat by id' })
  async deleteById(@Param('id') id: number) {
    return this.catsService.deleteById(id);
  }
}
