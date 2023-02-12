import * as typeorm from 'typeorm';

@typeorm.Entity()
export class test {
  @typeorm.Column()
  name: string;

  @typeorm.Column()
  password: string;

  @typeorm.Column()
  id: number;
}
