import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CatController } from './cat.controller';
import { cat_repositoy } from './cat.repositorys';
import { CatService } from './cat.service';
import { cat } from './entity/cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([cat]), forwardRef(() => AuthModule)],
  controllers: [CatController],
  providers: [CatService, cat_repositoy],
  exports: [CatService, TypeOrmModule, cat_repositoy],
})
export class CatModule {}
