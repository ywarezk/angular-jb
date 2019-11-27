import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoService } from './todo.service';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let task of tasks">{{task.title}}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ajax-example';
  tasks = [];
  private _sub : Subscription;

  constructor(private _todo : TodoService, private _router : Router) {

  }

  ngOnInit(){
    this._todo.getTodos().subscribe((tasksFromServer) => {
      this.tasks = tasksFromServer as any
    });

    this._sub = this._router.events.subscribe(() => {

    })

    // this._todo.token$.subscribe((token) => {

    // })
  }

  login = () => {
    // this._todo.login(this.email, this.password).subscribe((token) => {
    //   this._todo.token$.next(token)
    // });
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
