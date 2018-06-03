import { TodoModel } from './../shared/models/todo.model';
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newTodo: TodoModel = new TodoModel();


  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new TodoModel();
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }
}
