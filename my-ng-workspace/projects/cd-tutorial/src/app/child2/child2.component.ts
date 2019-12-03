import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-child2',
  template: `
    <p>
      child2 works! {{title | async}} {{sayHello()}}
    </p>
    <!--<p>
        {{tasks$ | async | json}}
    </p>-->
    <app-grand2></app-grand2>
  `,
  styleUrls: ['./child2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit {
    @Input() hello;

    tasks$ : Observable<any>;

    title : BehaviorSubject<string> = new BehaviorSubject('hello');

  constructor(private _http : HttpClient) { }

    ngOnInit() {
        this.tasks$ = this._http.get('https://nztodo.herokuapp.com/api/task/?format=json');
        //   .subscribe((tasks) => {
        //       console.log('server returned response');
        //       this.tasks = tasks;
        //   })

        setTimeout(() => {
            this.title.next('world');
        }, 1000)
    }

    sayHello = () => {
        console.log('CD: Child2');
    }

}
