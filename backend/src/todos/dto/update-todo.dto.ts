import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { CATEGORY } from '../../entities/todo.entity';

export class UpdateTodoDto {
  @ApiProperty({
    example: '学校へいく',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: CATEGORY.GENERAL,
    type: 'enum',
  })
  @IsEnum(CATEGORY)
  @IsNotEmpty()
  category: CATEGORY;
}
