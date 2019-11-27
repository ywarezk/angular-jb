import { REPLServer } from "repl";


// Promise

// promise is officially in the language since ES6
// class
// is wrapping async code
// promise has status
// pending => success / fail

const timerPromsie : Promise<string> = new Promise((resolve, reject) => {
    console.log('how many times does this function run?');

    setTimeout(() => {
        resolve('hey success!!!');
        // reject(new Error('the server returned an error'));
    }, 1000)
});

const newPromsie : Promise<number | boolean> = timerPromsie.then((msg : string) => {
    console.log(msg);
    return msg.length;
}, (err) => {
    console.log(err.message);
    return Promise.resolve(true);
})

timerPromsie.then((msg : string) => {
    console.log(msg);
}, (err) => {
    console.log(err.message);
})

// promise chaining

timerPromsie
    .then((msg: string) => {
        return fetch(msg)
    })
    .then((response : Response) => {
        return response.json()
    })
    .then((jsonFromServer) => {

    })