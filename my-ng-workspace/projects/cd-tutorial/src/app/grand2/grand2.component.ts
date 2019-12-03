import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { $ } from 'protractor';

// declare var $ : any;

@Component({
  selector: 'app-grand2',
  template: `
    <p (click)="title='hello'">
      grand2 works! {{ sayHello() }}
    </p>
  `,
  styleUrls: ['./grand2.component.css']
})
export class Grand2Component implements OnInit {

  constructor(private _cd : ChangeDetectorRef) { }

    ngOnInit() {
        // setTimeout(() => {
        //     console.log('timer in grand2');
        // }, 1000);

        // $('.hello').addEventListener('haniCarousel', function() {
        //     this._cd.detectChanges();
        // })
    }

    sayHello = () => {
        console.log('CD: Grand2');
    }

}


// setTimeout(() => {
//     console.log('timer in grand2');
// }, 1000);