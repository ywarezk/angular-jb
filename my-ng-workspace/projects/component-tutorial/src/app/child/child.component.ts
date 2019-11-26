import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
    <h1>property binding</h1>
    <p>
      child works! {{name}}
    </p>
    <p>
        {{sayHello()}}
    </p>
    <p>
        {{wat()}}
    </p>
    <!-- No side effects -->
    <!-- [domProperty]="non sideeffect expression" -->
    <p class="{{name}}" [innerText]="name">

    </p>

    <h1>Event binding</h1>
    <!-- (event)="expression with side effect" -->
    <button (click)="changeSomething()">click me</button>
    <div (mouseover)="name='hey where is the mouse'">
        hello
    </div>

    <input type="text" (input)="changeTheText($event)" />

    <input type="text" (input)="myText = $event.target.value" />

    {{myText}}

    <h1>Two way binding</h1>

    <input [value]="twoWayBindingExample" (input)="twoWayBindingExample=$event.target.value" />

    {{twoWayBindingExample}}

    <input [(ngModel)]="twoWayBindingExample" />

    

  `,
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    // static me = 'Yariv';

    name = 'Yariv Katz'

    twoWayBindingExample = 'hello';

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.name = 'foo bar';
        }, 2000);
    }

    sayHello = () => {
        // this.name = 'hello world';
        return 'hello world';
    }

    wat = () => {
        // return Math.random();
    }

    changeSomething = () => {
        this.name = 'somebody clicked the button';
    }

    changeTheText = (event) => {
        this.name = event.target.value;
    }

}
