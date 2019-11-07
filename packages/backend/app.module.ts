import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoModule } from './src/todo/todo.module';

const typeOrmModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3002,
  username: 'webapp-template',
  password: 'webapp-template',
  database: 'webapp-template',
  entities: [],
  synchronize: true
});
@Module({
  imports: [TodoModule, typeOrmModule],
  controllers: [],
  providers: []
})
export class AppModule {}
