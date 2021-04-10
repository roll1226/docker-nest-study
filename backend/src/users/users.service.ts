import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../entities/repositories/user.repository';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { SignInUserDto } from './dto/sign-in-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private UserRepository: UserRepository,
    private readonly jwtSecret: JwtService,
  ) {}

  async createUser(signUpUserDto: SignUpUserDto): Promise<void> {
    await this.UserRepository.createUser(signUpUserDto);
  }

  async signIn(SignInUserDto: SignInUserDto): Promise<string> {
    const email = await this.UserRepository.validatePassword(SignInUserDto);

    const payload = {
      email,
    };
    return await this.jwtSecret.signAsync(payload);
  }
}
