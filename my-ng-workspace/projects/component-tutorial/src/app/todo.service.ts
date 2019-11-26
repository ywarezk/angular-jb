import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    /**
     * @returns {Promise<any[]>}
     */
    getTodos = () => {
        const promiseWithResponse: Promise<Response> = fetch(`https://nztodo.herokuapp.com/api/task/?format=json`);
        const promiseWithData: Promise<any[]> = promiseWithResponse.then(function (res: Response) {
            return res.json();
            // return true
        });
        return promiseWithData;
    }

    /**
     * @returns {Promise<any[]>}
     */
    getTodos2 = async () => {
        const response = await fetch(`https://nztodo.herokuapp.com/api/task/?format=json`);
        const json = await response.json();
        return json;
    }

    constructor() { }
}
