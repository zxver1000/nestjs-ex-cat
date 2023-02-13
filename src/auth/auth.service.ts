import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { cat_repositoy } from 'src/cat/cat.repositorys';
import { LoginReqeuistDto } from './dto/login.jwt.dto';
import * as bycript from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly cat_repo: cat_repositoy,
    private jwtservice: JwtService,
  ) {}

  async jwtlogin(data: LoginReqeuistDto) {
    const { email, password } = data;

    const cat = await this.cat_repo.findCatByeamil(email);

    if (!cat) {
      throw new UnauthorizedException('check password or email ');
    }

    const pass_compare: boolean = await bycript.compare(password, cat.password);
    if (!pass_compare) {
      throw new UnauthorizedException('check password or email ');
    }

    const payload = { email, name: cat.name };

    return {
      token: this.jwtservice.sign(payload),
    };
  }
}
