import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
