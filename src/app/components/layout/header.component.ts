import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
        <h1>Todo List</h1>
        <div id="nav">
          <a routerLink="/">Home</a> |
          <a routerLink="/about">About</a>
        </div>
        </header>
    `,
  styles: [ `
    .header {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
    header a {
        color: #fff;
        padding-right: 5px;
    } `
  ]
})
export class HeaderComponent {
}
