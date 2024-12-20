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
import { CreateMovieDto } from './dto/create-move.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly MS: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.MS.getAll();
  }
  @Get('/:id')
  getOne(@Param('id') id: number): Movie {
    return this.MS.getOne(id);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.MS.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    return this.MS.deleteOne(id);
  }
  @Patch('/:id')
  patch(@Param('id') id: number, @Body() updateData: UpdateMovieDto) {
    return this.MS.update(id, updateData);
  }
}
