import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<Todo>;
  @Output() removeTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit() {}

}
