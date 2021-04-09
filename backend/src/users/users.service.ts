import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../entities/repositories/user.repository';
import { SignUpUserDto } from './dto/sign-up-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private UserRepository: UserRepository,
  ) {}

  async createUser(signUpUserDto: SignUpUserDto): Promise<void> {
    await this.UserRepository.createUser(signUpUserDto);
  }
}
