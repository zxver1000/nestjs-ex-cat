import { LoggerMiddleware } from './logger/logger.middleware';
import { CatsService } from './cats/cats.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '211.183.4.210',
      port: 3306,
      username: 'tt',
      password: 'tt',
      database: 'test',
      entities: [test], // 사용할 entity의 클래스명을 넣어둔다.
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
