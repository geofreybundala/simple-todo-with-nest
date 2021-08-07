import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}
