import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Delete,
  Body,
  Patch,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MS: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MS.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') id: string): Movie {
    return this.MS.getOne(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.MS.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.MS.deleteOne(id);
  }
  @Patch('/:id')
  patch(@Param('id') id: string, @Body() updateData) {
    return this.MS.update(id, updateData);
  }
}
