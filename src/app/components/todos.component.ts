import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
  <div>
    <div *ngFor="let todo of todos">
        <app-todo-item [todo]="todo" (delTodoEvent)="delTodo($event)"></app-todo-item>
    </div>
  </div>
    `
})
export class TodosComponent {
    @Output() delTodoEvent: EventEmitter<any> = new EventEmitter();
    @Input() private todos;
    delTodo($event) {
        this.delTodoEvent.emit($event);
    }
}
