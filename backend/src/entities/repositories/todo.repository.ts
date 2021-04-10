import { EntityRepository, Repository } from 'typeorm';
import { Todo } from '../todo.entity';
import { CreateTodoDto } from '../../todos/dto/create-todo.dto';
import { User } from '../user.entity';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  async createTodo(
    { title, category }: CreateTodoDto,
    user: User,
  ): Promise<Todo> {
    const todo = new Todo();
    todo.title = title;
    todo.category = category;
    todo.userId = user.id;
    await todo.save();

    delete todo.user;
    return todo;
  }
}
