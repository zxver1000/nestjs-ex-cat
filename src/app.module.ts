import { LoggerMiddleware } from './logger/logger.middleware';
import { CatsService } from './cats/cats.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { test1 } from './cats/entity/cats.entity';
import { cat } from './cat/entity/cat.entity';
import { CatModule } from './cat/cat.module';
@Module({
  imports: [
    CatModule,
    //env file inport
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test1',
      entities: [cat], // 사용할 entity의 클래스명을 넣어둔다.
      synchronize: true, // false로 해두는 게 안전하다.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
