import { CatsService } from './cats/cats.service';
import { Controller, Get, Req, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import * as express from 'express';
import { brotliDecompressSync } from 'zlib';

@Controller('c')
export class AppController {
  constructor(
    private readonly appService: AppService,

  ) {}

  @Get('hello/:id')
  getHello(
    @Req() req: express.Request,
    @Body() body,
    @Param() param: { id: string },
  ): string {
    console.log(req);
    console.log(param);
  
    return this.appService.getHello();
  }
}
