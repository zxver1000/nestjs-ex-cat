import { HttpExceptionFilter } from './../http-exception.filter';
import { CatsService } from './cats.service';
import {
  Catch,
  Controller,
  Get,
  HttpException,
  UseFilters,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
export class CatsController {
  //디펜던스 인젝션
  constructor(private readonly CatsService: CatsService) {}

  @Get()
  getAllCat(): string {
    throw new HttpException('ss', 401);
    return 'all cat';
  }

  @Get(':id')
  findcat(@Param('id', ParseIntPipe) param: number): string {
    console.log(typeof param);
    return 'find cat';
  }
}
