import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { test1 } from './entity/cats.entity';
@Module({
  imports: [TypeOrmModule.forFeature([test1])],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService,TypeOrmModule],
})
export class CatsModule {}
