"use strict";
/**
 * class examples
 */
class Person {
    // a = this;
    constructor(_myName) {
        this._myName = _myName;
        this.myAge = 34;
        this.birthday2 = () => {
            this.myAge++;
        };
        // this.hello = 'world';
        // this.birthday = this.birthday.bind(this)
    }
    birthday() {
        this.myAge++;
    }
}
// const myPerson = new Person();
class Child extends Person {
}
const myChild = new Child('Yariv');
myChild.birthday(); // 35
myChild.birthday2(); // 36
const a = { hello: myChild.birthday, foo: myChild.birthday2 };
a.hello(); // 36 a = {... myAge: NAN}
console.log(myChild.myAge); // 36
a.foo(); // 37
class MySingleton {
    constructor() {
    }
    static getInstance() {
        if (MySingleton._instance) {
            return MySingleton._instance;
        }
        MySingleton._instance = new MySingleton();
        return MySingleton._instance;
    }
}
const mySingleton = MySingleton.getInstance();
