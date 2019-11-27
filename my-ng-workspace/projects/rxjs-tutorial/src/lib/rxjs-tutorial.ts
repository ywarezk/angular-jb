import {Observable, Subscription, Subject} from 'rxjs';

// Promise VS Observable
// i can call next many times
// promise i can call resolve once

const intervalObservable : Observable<string> = new Observable((observer) => {

    let counter = 0;
    console.log('how many times will this run?');

    // const resultString = [];

    // closing from the inside
    // 1. observer error
    // 2. complete
    let intervalId = setInterval(() => {
        // observer.next('hello world');
        // observer.error(new Error());
        //observer.complete()

        counter++;

        if (counter < 3) {
            observer.next('hello world')
        } else {
            observer.complete();
        }
    }, 1000);

    return () => {
        clearInterval(intervalId)
    }
});

// Promise VS Observable
// Observable is lazy Promise is not
// Observable is multiplied per listener


// intervalObservable = null;

const connectionBetweenListenerAndDataStream : Subscription = intervalObservable.subscribe((msg: string) => {
    console.log(msg)
}, (err) => {
    console.log(err.message)
}, () => {

})

const connectionBetweenListenerAndDataStream1 : Subscription = intervalObservable.subscribe((msg: string) => {
    console.log(msg)
}, (err) => {
    console.log(err.message)
})

// when observable is closing
// closing observable from outside

// Promise VS Observable
// Observable is cancelable

setTimeout(() => { 
    connectionBetweenListenerAndDataStream.unsubscribe();
    connectionBetweenListenerAndDataStream1.unsubscribe();
}, 3000);


const interval2Subject : Subject<string> = new Subject();

setInterval(() => {
    interval2Subject.next('hello');
}, 1000);

interval2Subject.subscribe((msg: string) => {

})
