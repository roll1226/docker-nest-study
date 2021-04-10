import {
  Body,
  Controller,
  HttpCode,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { SignInUserDto } from './dto/sign-in-user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Post('sign_up')
  @ApiCreatedResponse({
    description: 'ユーザー登録完了',
  })
  @ApiBadRequestResponse({
    description: '入力値のフォーマットエラー',
  })
  @ApiConflictResponse({
    description: 'メールアドレスの重複エラー',
  })
  @ApiInternalServerErrorResponse({
    description: 'DBサーバ接続エラー',
  })
  async signUp(
    @Body(ValidationPipe) signUpUserDto: SignUpUserDto,
  ): Promise<void> {
    await this.UsersService.createUser(signUpUserDto);
  }

  @Post('sign_in')
  @HttpCode(200)
  @ApiOkResponse({
    type: String,
    description: 'ユーザーログイン完了',
  })
  @ApiUnauthorizedResponse({
    description:
      'メールアドレスまたはパスワードが異なることによりログインエラー',
  })
  async signIn(
    @Body(ValidationPipe) SignInUserDto: SignInUserDto,
  ): Promise<string> {
    return await this.UsersService.signIn(SignInUserDto);
  }
}
