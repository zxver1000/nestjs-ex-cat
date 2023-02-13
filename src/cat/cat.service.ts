import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { catdto } from './dto/cat.request.dto';
import { cat } from './entity/cat.entity';
import * as bycript from "bcrypt";
import { cat_repositoy } from './cat.repositorys';

@Injectable()
export class CatService {

    constructor(
    private readonly cat_repository:cat_repositoy
        ){}

    getall(){
//return this.cat_repo.find();
    }

   async  signup(cat:catdto){

       const {email,name,password} = cat;
    
        const Is_Exist_email=await this.cat_repository.existemail(email);

    
        if(Is_Exist_email)
        {
            throw new UnauthorizedException('이미잇어용');
        }

      const hash_pass=await bycript.hash(password,10);
    
      cat.password=hash_pass;

      const c_cat=this.cat_repository.createcol(cat); 
        
        return c_cat;
    }

}
