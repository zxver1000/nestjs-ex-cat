import * as typeorm from 'typeorm';

@typeorm.Entity()
export class test1 {
  @typeorm.Column()
  name: string;

  @typeorm.Column()
  password: string;

  @typeorm.PrimaryGeneratedColumn()
  id: number;
}
