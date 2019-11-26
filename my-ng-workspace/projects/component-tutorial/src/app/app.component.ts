import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Component Tutorial</h1>

        <app-child></app-child>
        <app-child></app-child>
        <app-child></app-child>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'component-tutorial';
}
