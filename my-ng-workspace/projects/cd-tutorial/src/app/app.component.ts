import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>App</h1>
    {{ sayHello() }}
    <app-child1></app-child1>

    <app-child2 [hello]="world"></app-child2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cd-tutorial';

  world = {
      foo: 'bar'
  }

  sayHello = () => {
      console.log('CD: AppComponent');
  }

  ngOnInit() {
      setTimeout(() => {
        console.log('timer in app component');
        // this.world = {
        //     foo: 'Yariv'
        // };

        this.world['foo'] = 'yariv';
      }, 1000);
  }
}
