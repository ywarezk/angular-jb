import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand1',
  template: `
    <p>
      grand1 works! {{sayHello()}}
    </p>
  `,
  styleUrls: ['./grand1.component.css']
})
export class Grand1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    sayHello = () => {
        console.log('CD: Grand1');
    }

}
