import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

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

    <h1>Common directives</h1>

    <h2>*ngIf</h2>

    <p *ngIf="stamBoolean" >
    Hello everyone!
    </p>
    <button (click)="stamBoolean = !stamBoolean">toggle p</button>

    <h2>*ngFor</h2>

    <ul>
        <li *ngFor="let todoItem of todo" >
            {{todoItem}}
        </li>
    </ul>

    <ul>
        <li *ngFor="let todoItem of todo2" >
            {{todoItem.title}}
        </li>
    </ul>
  `,
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    // static me = 'Yariv';

    name = 'Yariv Katz'

    twoWayBindingExample = 'hello';

    stamBoolean = true;

    todo = [
        'Walk with Piglet & Sweetness',
        'buy tofu',
        'buy saten'
    ]

    todo2 = [];

    constructor(private _todoService: TodoService) { }

    ngOnInit() {
        setTimeout(() => {
            this.name = 'foo bar';
        }, 2000);

        this._todoService.getTodos().then((todoItems) => {
            this.todo2 = todoItems;
        })
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
