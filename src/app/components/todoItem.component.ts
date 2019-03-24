import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item" [class.is-complete]="todo.completed">
      <p>
        <input type="checkbox" (change)="markComplete()" />
        {{ todo.title }}
        <button (click)="delTodo(todo.id)" class="del">X</button>
      </p>
    </div>
  `,
  styles: [
    `
      .todo-item {
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
      }
      .is-complete {
        text-decoration: line-through;
      }
      .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
      }
    `
  ]
})
export class TodoItemComponent {
  @Output() delTodoEvent: EventEmitter<any> = new EventEmitter();
  @Input() private todo;
  markComplete() {
    this.todo.completed = !this.todo.completed;
  }
  delTodo(id) {
    this.delTodoEvent.emit(id);
  }
}
