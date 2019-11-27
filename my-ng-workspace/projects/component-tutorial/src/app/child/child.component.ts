import { Component, OnInit, DoCheck, Input, Output, EventEmitter, OnDestroy , ContentChild} from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
    // exportAs: 'helloWorld',
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

    <h1>
        Communication between components
    </h1>

    <button (click)="passToParent()">
        click to pass to parent
    </button>

    <h1>
        Template Reference Variable
    </h1>

    <!-- const pVar = document.getElementBy()  -->
    <p #pVar >
        hello world
    </p>

    <p>
        {{ pVar.innerText }}
    </p>

    <input #whatWillIGe="ngModel" type="text" [(ngModel)]="templateRefExample" />

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

    <h2>
    Pipes
    </h2>

    <p>
        <!-- {{ data | pipeName:arg1:arg2:arg3}} -->
        {{myObj | json}}
    </p>

    <p>
        {{myDate | date:'dd/MM/yyyy'}}
    </p>

    <p>
        {{name | rollerCoster:34:'hello' }}
    </p>

    <h2>
        Components have a lifecycle
    </h2>

    <p>

    </p>

    <h2>ng content</h2>

    <!-- this takes the template the parent send to the child in the tags -->
    <ng-content></ng-content>

  `,
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit /*, DoCheck*/ {
    
    @ContentChild('thisIsChildFromParent', {static: true})
    fromParent : ChildComponent;

    // static me = 'Yariv';
    @Output()
    buttonClicked: EventEmitter<string> = new EventEmitter();

    @Input()
    myJwt: string;

    @Input('msgThatWillBeDisplayedInHeader')
    message: string

    @Input('whenChanged')
    set thisWillJumpWhenUpdated(newValue) {
        this._updatedString = newValue;
    }

    const p : HTMLParagraphElement

    private _updatedString;

    name = 'Yariv Katz'

    myDate : Date = new Date();

    twoWayBindingExample = 'hello';

    stamBoolean = true;

    todo = [
        'Walk with Piglet & Sweetness',
        'buy tofu',
        'buy saten'
    ]

    todo2 = [];

    myObj = {
        name: 'yariv',
        age: 34
    }

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

    passToParent = () => {
        this.buttonClicked.emit('hello listeners');
    }

}
