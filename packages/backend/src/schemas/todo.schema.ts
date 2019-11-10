import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { User } from './user.schema';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  todoId: number;

  @ManyToOne(() => User, (x) => x.userId)
  @JoinColumn({ referencedColumnName: 'userId' })
  assignee: User;
}
