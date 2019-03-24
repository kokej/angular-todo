import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  template: `
  <div id="app">
    <app-add-todo (addTodoEvent)="addTodo($event)"></app-add-todo>
    <app-todos [todos]="todos" (delTodoEvent)="deleteTodo($event)"></app-todos>
  </div>
    `
})
export class HomeComponent implements OnInit {
  todos = [];
  constructor(private http: HttpClient) { }
  deleteTodo($event) {
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/${$event}')
      .subscribe(res => this.todos = this.todos.filter(todo => todo.id !== $event),
        err => console.log(err));
  }
  addTodo($event) {
    const { title, completed} = $event;
    return this.http.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed
    })
    .subscribe(res => this.todos = [...this.todos, res],
      err => console.log(err));
  }
  ngOnInit() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .subscribe(res => this.todos = res,
      err => console.log(err));
  }
}
