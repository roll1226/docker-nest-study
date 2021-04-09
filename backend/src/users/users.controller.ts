import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { SignUpUserDto } from './dto/sign-up-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post()
  async signUp(
    @Body(ValidationPipe) signUpUserDto: SignUpUserDto,
  ): Promise<void> {
    await this.UsersService.createUser(signUpUserDto);
  }
}
