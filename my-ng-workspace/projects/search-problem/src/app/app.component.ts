import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';
import {debounceTime, mergeMap, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
    <form>
        <div class="form-group">
            <label>Search</label>
            <input type="search" name="searchTodo" class="form-control" (input)="userTypedSearch($event)" />
        </div>        
    </form>
    <ul>
        <li *ngFor="let task of (serverResult$ | async)">
            {{task.title}}
        </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'search-problem';
  tasks = [];
  searchString$ : Subject<string> = new Subject();
  // Observable<task[]>
  serverResult$ : Observable<any>;

  private _sub : Subscription;

  constructor(private _http : HttpClient) {}

  ngOnInit() {
    this.serverResult$ = this.searchString$.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        mergeMap((whatTheUserTyped : string) => {
            return this._http.get(`https://nztodo.herokuapp.com/api/task/?format=json&search=${whatTheUserTyped}`);
        })
    );
    // .subscribe((tasks) => {
    //     // console.log(whatTheUserTyped);
    //     this.tasks = tasks as any
    // })  
  }

  userTypedSearch = (event) => {
    this.searchString$.next(event.target.value);
  }

  ngOnDestroy() {
    //   this.searchString$.complete();
    //   this._sub.unsubscribe();
  }
}


// var hello = 'world';