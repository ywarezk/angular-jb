import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  template: `
    <ul>
      <li *ngFor="let task of tasks">
        {{task.title}}
      </li>
    </ul>
  `,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks = [];


  constructor(private _todoService : TodoService) { }

  ngOnInit() {


    this._todoService.token$.subscribe((jwtToken) => {
      this._todoService.getTodos().subscribe((todos) => {
        this.tasks = todos;
      })
    })
  }

}
