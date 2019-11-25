import { Component } from "@angular/core";


@Component({
    selector: 'nz-header',
    // templateUrl: './header.component.html',
    template: `
        <header>
            <h1>
                hello im the header
            </h1>
            <nz-user></nz-user>
        </header>
    `
})
export class HeaderComponent {

}