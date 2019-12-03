import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p class="hello">
      child works!
    </p>
  `,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
