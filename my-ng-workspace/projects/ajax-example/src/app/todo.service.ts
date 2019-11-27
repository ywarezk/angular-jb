import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  token$ : Subject<string> = new Subject();

  /**
   * @returns {Observable}
   */
  getTodos = () => {
    return this._http.get('https://nztodo.herokuapp.com/api/task/?format=json')
  }

  constructor(private _http : HttpClient) { }
}
