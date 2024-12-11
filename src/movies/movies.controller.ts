import { Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will retrun all movies';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `this will return one movie ${id}`;
  }

  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This will delete a movie ${id}`;
  }
  @Patch('/:id')
  patch(@Param('id') id: string) {
    return `this will update a movie ${id}`;
  }
}
