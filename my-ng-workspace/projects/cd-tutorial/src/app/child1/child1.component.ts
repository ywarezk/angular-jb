import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works! {{sayHello()}}
    </p>
    <app-grand1></app-grand1>
  `,
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    sayHello = () => {
        console.log('CD: Child1');
    }

}
