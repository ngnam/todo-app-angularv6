import { TodoModel } from './../shared/models/todo.model';
import { Injectable } from '@angular/core';
import { TodosModule } from './todos.module';

@Injectable()
export class TodoService {
  // automatic incrementing of ids
  lastId: number = 0;

  // Placeholder for todos
  todos: TodoModel[] = [];

  constructor() { }

  // Simulate POST /todos
  addTodo(todo: TodoModel) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number) {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): TodoModel {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): TodoModel[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): TodoModel {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: TodoModel){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
