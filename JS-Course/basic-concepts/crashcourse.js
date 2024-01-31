//* objects
const humano = {
    dna: 'AACTG',
    name: 'Jai',
    born: Date.now(),
    walk(){
        console.log('walking');
    }
}

//* inheritance through prototypes
Object.getPrototypeOf(humano);

//* OOP
class Human {
    constructor(name){
        this.dna = 'AACTG';
        this.name = name;
    }
    
    get gender(){
        return this.gender;
    }
    set gender(gender){
        this.gender = gender;
    }
}

//* Built-in Data Structures
const list = ['foo','bar','bar'];
const unique = new Set(list);
const dict = new Map([ 
    ['foo',1],
    ['bar',2]
]);

//map cannot be garbage collected as they are always reference
//instead we can use WeakMap & WeakSet (reducing memory usage)
const weakDict = new WeakMap([
    ['foo',1],
    ['bar',2]
])

//* asynchronous code
//setTimeout is a callback function, bc it get enqueued in the event loop, and only called after 5 seconds
setTimeout(() => {
    console.log('5 seconds in the future');
}, 5000);

//however a better way to avoid callback hell is to use Promises
const promise = new Promise(
    (resolve, reject) => {
        //do something async here

        if(greatSuccess){
            resolve('success');
        } else {
            reject('failure');
        }
    }
);

//use then/catch to handle resolve/reject respectively
promise.then(success => {
    console.log('yay!', success);
})
promise.catch(error => {
    console.log('oh no', error);
})

//* Async functions: automatically return your promise
async function asyncFunc(){
    try {
        //await keyword will wait for other promieses to resolve
        const result = await promise; 
    } catch(error){
        //use a try catch to catch potential errors
    }
}

//* Modules: use when we cannot put all our code into a single file
import helper from "./help.js";
import { a,b,c } from "./help.js"

//* NPM package manager
//when we install a package from nmp it will install it in the 'node_modules' folder
//it will also create a 'package.json' that lists all the dependencies within your project
//ex. run 'npm install' in the terminal