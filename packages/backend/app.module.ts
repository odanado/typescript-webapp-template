import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoModule } from './src/todo/todo.module';

console.log(__dirname);
const typeOrmModule = TypeOrmModule.forRoot({
  type: 'mysql',
  charset: 'utf8mb4',
  host: 'localhost',
  port: 3002,
  username: 'webapp-template',
  password: 'webapp-template',
  database: 'webapp-template',
  entities: [__dirname + '/src/schemas/**/*.js'],
  synchronize: true,
  logging: true
});
@Module({
  imports: [TodoModule, typeOrmModule],
  controllers: [],
  providers: []
})
export class AppModule {}
