import { Directive, ElementRef } from '@angular/core';
// import * as Core from '@angular/core';


@Directive({
    selector: '[colorMe]'
})
export class ColorMeDirective {
    constructor(private _element: ElementRef) {
        _element.nativeElement.style.backgroundColor = 'orange';
    }
}