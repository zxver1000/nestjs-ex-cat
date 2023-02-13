import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { catdto } from './dto/cat.request.dto';
import { cat } from './entity/cat.entity';
import * as bycript from 'bcrypt';

@Injectable()
export class cat_repositoy {
  constructor(
    @InjectRepository(cat)
    private cat_repo: Repository<cat>,
  ) {}

  async findCatByeamil(email: string): Promise<cat | null> {
    const result = await this.cat_repo.findOne({ where: { email } });
    return result;
  }

  async existemail(email: string): Promise<boolean> {
    try {
      const result = await this.cat_repo.findOne({ where: { email } });

      if (result) return true;

      return false;
    } catch (e) {
      throw new HttpException('db error', 404);
    }
  }

  async createcol(cat: catdto): Promise<cat> {
    const result = await this.cat_repo.save({
      email: cat.email,
      password: cat.password,
      name: cat.name,
      url: 'url ',
    });
    return result;
  }

  async findIdWidthoutpassword(email: string): Promise<cat | null> {
    const result = await this.cat_repo.findOne({ where: { email } });

    if (result != null) delete result['password'];

    return result;
  }
  catch(e) {
    throw new HttpException('db error', 404);
  }
}
