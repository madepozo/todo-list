import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TodoComponent } from './components/todo/todo.component';
import { TodoTitleComponent } from './components/todo/todo-title/todo-title.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo/todo-form/todo-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoTitleComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
