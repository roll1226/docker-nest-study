import { Todo } from '../entities/todo.entity';
import { User } from '../entities/user.entity';
import { getRepository } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding';

export default class CreateTodos implements Seeder {
  public async run(factory: Factory) {
    const todoRepository = getRepository(Todo);
    const todoMax = await todoRepository.count();

    const userRepository = getRepository(User);
    const userMax = await userRepository.count();

    await (async () => {
      for (let insertId = todoMax + 1; insertId <= todoMax + 10; insertId++) {
        await factory(Todo)({
          id: insertId,
          userMax,
        }).create();

        return Promise.resolve();
      }
    });
  }
}
