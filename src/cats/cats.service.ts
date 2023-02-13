import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { test1 } from './entity/cats.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(test1)
      private t_repo: Repository<test1>
      
  ){}
  hi(): string {
    return 'hihi';
  }

  findall():Promise<test1[]>{
    return this.t_repo.find();
  }
/*
findone(name :string):Promise<test_hi>{
  return this.t_repo.findOne(name);
}
*/
async create(test:test1):Promise<void>{
  await this.t_repo.save(test);
}

async remote(integers:number):Promise<void>{
  await this.t_repo.delete(integers);
}

}
