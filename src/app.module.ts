import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), TodoModule],
})
export class AppModule {}
