import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hi(): string {
    return 'hihi';
  }
}
