import { User } from '../entities/user.entity';
import { define } from 'typeorm-seeding';
import * as Faker from 'faker/locale/ja';

define(User, (faker: typeof Faker) => {
  const user = new User();
  user.email = faker.internet.email();
  user.password = 'hogehgoe';

  return user;
});
