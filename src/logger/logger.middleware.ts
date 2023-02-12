import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private looger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    //  console.log(req.originalUrl);
    res.on('finish', () => {
      this.looger.log(`${req.ip} ${req.originalUrl}  ${res.statusCode}`);
    });
    next();
  }
}
