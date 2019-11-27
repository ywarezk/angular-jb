var rxjs_1 = require('rxjs');
// Promise VS Observable
// i can call next many times
// promise i can call resolve once
var intervalObservable = new rxjs_1.Observable(function (observer) {
    setInterval(function () {
        observer.next('hello world');
        // observer.error(new Error());
    }, 1000);
});
intervalObservable.subscribe(function (msg) {
    console.log(msg);
}, function (err) {
    console.log(err.message);
});
