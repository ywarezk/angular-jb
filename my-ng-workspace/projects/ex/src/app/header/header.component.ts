import { Component, OnInit } from '@angular/core';
import './header.component.css';
import { MessageService } from '../services/message.service';
// import img from './dog.jpg';

declare var require: any;
// const img = require('./dog.jpg');

@Component({
    selector: 'app-header',
    template: `
        <header class="alert-danger" colorMe>
            <h1>header is working! {{fromMessageService}}</h1>
            <img src="{{imgUrl}}" />
        </header>
    `
    // providers: [MessageService]
    // styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    imgUrl = require('./dog.jpg');;
    fromMessageService: string;

    constructor(messageService: MessageService) {
        this.fromMessageService = messageService.hello
    }

    ngOnInit() {
    }

}
