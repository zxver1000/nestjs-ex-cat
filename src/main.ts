import { HttpExceptionFilter } from './http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as expressBasicAuth from 'express-basic-auth';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(new ValidationPipe()); //class validater 등록

  app.use(
    ['/docs', 'docs-json'],
    expressBasicAuth({
      challenge: true,
      users: {
        [process.env.swaggerUser]: process.env.swaggerpassword,
      },
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('cat')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
