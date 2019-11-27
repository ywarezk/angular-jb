/**
 * class examples
 */

abstract class Person {
    myAge: number = 34;
    // a = this;

    constructor(private _myName: string) {
        // this.hello = 'world';
        // this.birthday = this.birthday.bind(this)
    }

    birthday() {

        this.myAge++;
    }

    birthday2 = () => {
        this.myAge++;
    }
}

// const myPerson = new Person();

class Child extends Person {

}

const myChild = new Child('Yariv');

myChild.birthday(); // 35

myChild.birthday2(); // 36

const a = { hello: myChild.birthday, foo: myChild.birthday2 }

a.hello(); // 36 a = {... myAge: NAN}
console.log(myChild.myAge); // 36



a.foo(); // 37

class MySingleton {
    static _instance: MySingleton;

    static getInstance() {
        if (MySingleton._instance) {
            return MySingleton._instance;
        }
        MySingleton._instance = new MySingleton();
        return MySingleton._instance;
    }

    private constructor() {

    }
}

const mySingleton: MySingleton = MySingleton.getInstance();


class SetterExample {
    name = 'yariv';
    private _hello = 'hello world';

    set hello(value: string) {
        this._hello = value
    }

    get hello() {
        return this._hello;
    }
}

const mySetter: SetterExample = new SetterExample()

mySetter.name = 'katz';
mySetter.hello = 'hello world';



// generic type

// function sayHello(msg) {

// }

function sayHello<T>(msg : any) {

}

class StamGeneric<T> {
    

    constructor(public hello : T) {}

    sayHello = () : T => {
        return this.hello;
    }
}

const stam1 = new StamGeneric('hello');

// const myNumber : number = stam1.sayHello();
const stam2 = new StamGeneric(10);
const myNumber : number = stam2.sayHello();

