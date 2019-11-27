import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
    selector: 'app-root',
    template: `
        <h1>Component Tutorial</h1>

        <app-child 
            [myJwt]="jwtToken + ' hello'" 
            [msgThatWillBeDisplayedInHeader]="'hello from parent'"
            [whenChanged]="title"
            (buttonClicked)="jumpWhenChildSaySo($event)"
            ></app-child>
        <app-child #myChild ></app-child>
        <app-child>
            <div>
                <h1>hello</h1>    
                <app-child #thisIsChildFromParent></app-child>
            </div>
        </app-child>

        <p>
            {{myChild.name}}
        </p>

        <button (click)="triggerChild()">
            click me to alert something in child
        </button>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    jwtToken = 'dgasgsdfgGHJXVB234234SDFSDF this is jwt token';
    title = 'component-tutorial';

    @ViewChild('myChild', {static: true})
    thisIsMyChild : ChildComponent;

    jumpWhenChildSaySo = (msg : string) => {

    }

    

    triggerChild = () => {
        if (this.thisIsMyChild.name === 'Yariv Katz') {
            alert('success');
        }
    }
}
