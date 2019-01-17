import { Component, OnInit } from '@angular/core';

import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Array<Todo>;
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        title: 'Estudiar Angular',
        id: 21213
      },
      {
        title: 'Estudiar NodeJS',
        id: 2323
      }
    ];
  }

  addTodo(todo: Todo) {
    console.log('Todo >', todo);
    this.todos.push(todo);
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(item => item !== todo);
  }

}
