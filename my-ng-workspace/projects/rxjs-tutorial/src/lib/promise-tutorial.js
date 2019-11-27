// Promise
// promise is officially in the language since ES6
// class
// is wrapping async code
// promise has status
// pending => success / fail
var timerPromsie = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hey success!!!');
        // reject(new Error('the server returned an error'));
    }, 1000);
});
timerPromsie.then(function (msg) {
    console.log(msg);
}, function (err) {
    console.log(err.message);
});
