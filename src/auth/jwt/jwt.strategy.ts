import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { cat_repositoy } from 'src/cat/cat.repositorys';
import { payload } from './jwt.payload';

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly cat_repo: cat_repositoy) {
    //jjwt 인증할때사용
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
      ignoreExpriation: false,
    });
  }

  async validate(payload: payload) {
    console.log('실행');
    const cat = this.cat_repo.findIdWidthoutpassword(payload.email);

    if (cat) {
      return cat; //request.users
    } else {
      throw new UnauthorizedException('접근오류');
    }
  }
}
