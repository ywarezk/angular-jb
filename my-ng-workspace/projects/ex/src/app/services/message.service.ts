import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    hello = 'world'

    // constructor(private _http : HttpClient) {

    // }
}