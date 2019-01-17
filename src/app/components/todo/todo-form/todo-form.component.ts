import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  title: string;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {
    this.title = '';
  }

  onClick() {
    if (this.title) {
      const todo = new Todo();
      todo.title = this.title;
      this.addTodo.emit(todo);
      this.title = '';
    }
  }

}
