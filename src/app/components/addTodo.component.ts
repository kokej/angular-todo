import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
    <div>
      <form (submit)="addTodo($event)">
        <input type="text" name="title" [(ngModel)]="title" placeholder="Add Todo">
        <input type="submit" value="Submit" class="btn">
      </form>
    </div>
    `,
  styles: [`
    form {
      display: flex;
    }
    input[type="text"] {
      flex: 10;
      padding: 5px;
    }
    input[type="submit"] {
      flex: 2;
    }
  `]
})
export class AddTodoComponent {
  @Output() addTodoEvent: EventEmitter<any> = new EventEmitter();
    title = '';
    addTodo($event) {
        $event.preventDefault();
        const newTodo = {
          title: this.title,
          completed: false
        };
        console.log('newTodo --> ', newTodo);
        this.addTodoEvent.emit(newTodo);
        this.title = '';
      }
}
