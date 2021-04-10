import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from '../entities/repositories/todo.repository';
import { CreateTodoDto } from './dto/create-todo.dto';
import { User } from '../entities/user.entity';
import { Todo } from 'src/entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoRepository) private todoRepository: TodoRepository,
  ) {}

  async createTodo(createTodoDto: CreateTodoDto, user: User): Promise<Todo> {
    return await this.todoRepository.createTodo(createTodoDto, user);
  }
}
