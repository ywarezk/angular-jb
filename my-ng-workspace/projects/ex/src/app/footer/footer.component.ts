import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <footer class="alert-success">
        <h1>This is the footer</h1>
    </footer>
  `,
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
