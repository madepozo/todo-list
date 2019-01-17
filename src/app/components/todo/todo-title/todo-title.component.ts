import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-title',
  templateUrl: './todo-title.component.html',
  styleUrls: ['./todo-title.component.css']
})
export class TodoTitleComponent implements OnInit {
  title: string;
  constructor() {}

  ngOnInit() {
    this.title = 'Angular Todo List App';
  }
}
