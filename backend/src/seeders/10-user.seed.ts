import { User } from '../entities/user.entity';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateUser implements Seeder {
  public async run(factory: Factory) {
    await factory(User)().createMany(3);
  }
}
