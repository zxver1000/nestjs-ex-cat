import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { CatModule } from 'src/cat/cat.module';
import { cat_repositoy } from 'src/cat/cat.repositorys';
import { AuthService } from './auth.service';
import { jwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    //jwt 만들떄사용
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1y' },
    }),
    forwardRef(() => CatModule),
  ],

  providers: [AuthService, jwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
