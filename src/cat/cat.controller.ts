import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CatService } from './cat.service';
import { catdto } from './dto/cat.request.dto';
import { cat } from './entity/cat.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LoginReqeuistDto } from 'src/auth/dto/login.jwt.dto';
import { authguard } from 'src/auth/jwt/jwt.guard';
import { Request } from 'express';

@Controller('cats')
export class CatController {
  constructor(
    private readonly catservice: CatService,
    private readonly authservice: AuthService,
  ) {}

  @ApiOperation({ summary: '고양이 정보 가져오기' })
  @UseGuards(authguard)
  @Get()
  getallcat(@Req() request: Request) {
    console.log(request.user);

    return request.user;

    // return this.catservice.getall();
  }
  @ApiOperation({ summary: '회원가입' })
  @Post('login')
  async login(@Body() data: LoginReqeuistDto) {
    console.log(data);
    console.log(await this.authservice.jwtlogin(data));
    return { data: await this.authservice.jwtlogin(data) };
  }

  @ApiResponse({
    status: 404,
    description: 'server not connect',
  })
  @ApiResponse({
    status: 200,
    description: 'sueccess',
    type: cat,
  })
  @ApiOperation({ summary: '회원가입' })
  @Post()
  async singup(@Body() body: catdto) {
    console.log(body);
    return await this.catservice.signup(body);
  }
}
