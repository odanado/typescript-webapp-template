import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index
} from 'typeorm';
import { Todo } from './todo.schema';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column()
  name: string;

  @Column({ type: 'integer' })
  @Index()
  userId: number;

  @OneToMany(() => Todo, (x) => x.assignee)
  todos: Todo[];
}
