import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoController', () => {
  let controller: TodoController;

  const mockTodoService = {
    create: jest.fn(dto =>{
      return {
        _id: 'wewe23231',
        ...dto
      }
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    })
    .overrideProvider(TodoService)
    .useValue(mockTodoService)
    .compile();

    controller = module.get<TodoController>(TodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('it should create todo',()=> {
      const  dto = {name:'test', description: 'hello test '}
      expect(controller.create(dto)).toEqual({
        _id:expect.any(String),
        ...dto
      })
  });
});
