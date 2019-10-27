import { Module } from '@nestjs/common';
import { TodoModule } from './src/todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: []
})
export class AppModule {}
