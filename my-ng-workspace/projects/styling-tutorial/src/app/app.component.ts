import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class="app-root">
            <div class="hello">
                hello in app component
            </div>
            <app-child class="hello"></app-child>
        </div>
        
    `,
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'styling-tutorial';
}
