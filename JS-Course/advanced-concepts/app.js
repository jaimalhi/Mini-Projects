//* Prototype Chain 
/*
const animal = {
    dna: 123,
    legs: {
        front: 2, back: 2
    },
    sleep(){
        console.log('zzz');
    }
};

const p1 = Object.getPrototypeOf(animal);
console.log(p1); //[Object: null prototype] {} -> empty object

const p2 = Object.getPrototypeOf(p1);
console.log(p2); //null -> end of prototype chain

const dog = {
    bark(){
        console.log('woof');
    }
}
Object.setPrototypeOf(dog, animal); //dog now inherits from animal
console.log(dog.dna); //123
console.log(Object.getPrototypeOf(dog)); //prints out animal object
*/

//* Destructuring
/*
//lets set properties to individual variables
const dog = {
    name: 'fide',
    age: 4,
    bark(){
        console.log('woof');
    }
}
//dot notation
const name1 = dog.name;
const age1 = dog.age;

//simpler & more concise
const { name, age } = dog;
//if we want variable name to differ from property name
const { name: fullName, age: currAge } = dog;

//using arrays
const arr = ['foo','bar','baz'];
const [a, b, c] = arr; //position matters here
//we can also choose to get some elements via
const [,,d] = arr; //equivalent to: const c = arr[2];
*/

//* Spread
/*
const obj1 = {
    first: 'a',
    second: 'b',
    third: 'c'
}

const obj2 = {
    //...obj1, //this is merging obj1 directly into obj2, placement of this matters
    third: 'd',
    fourth: 'e'
}

//how can we combine these two objects?
//1. object assign
const full1 = Object.assign({}, obj1, obj2); //last argument has highest priority
console.log(full1); //{ first: 'a', second: 'b', third: 'd', fourth: 'e' }
//2. spread operator
const full = {...obj1, ...obj2};
console.log(full); //{ first: 'a', second: 'b', third: 'd', fourth: 'e' }
*/

//* Optional Chaining
//allows you to call object properties safely, without throwing an error
/* 
const person = { };

const dude1 = person.name;
console.log(foo); // Uncaught TypeError: Cannot read property 'bar' of undefined

const dude = person?.name; // undefined
//if you are ever unsure if an object is defined, you should use optional chaining
*/

//* Nullish Coalescing
//similar to the logical OR operator ||, but it only returns the right-hand side if the left-hand side is null or undefined
/*
const foo1 = null ?? 'bar';
console.log(foo1); // 'bar'

const foo = 0 ?? 'bar';
console.log(foo); // 0
*/

//* Higher Order Functions
//a function that takes a function as an argument, or returns a function
/*
//Example 1
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;   
}
function math(x, y, operator) {
    return operator(x, y);
}
math(5, 2, add); // 7

//Example 2
function funWrapper(callback){
    callback('Called by wrapper');
}
funWrapper(sayHi);
funWrapper(m => console.log(m)); //use arrow functions for efficiency when dealing with HOFs

//Example 3
function funCreator(){
    return function(message){
        return 'Said...' + message;
    }
}
const fn = funCreator();
fn('hello');
*/

//* Closures
//a function that has access to the parent scope, even after the parent function has closed.
//This behavior makes them useful for encapsulating private variables.
/*
function encapsulatedState(x) {
    let state = 10;
    return function() { //higher order closure
        state += x;
        return state;
    }
}
*/

//* Array Tricks
//create a range of numbers
const arr = [1,2,3,3,3,4,5];
//OR
const range1 = Array(100).fill(0) //array of 100 zeroes
.map((_, i) => i + 1); //map loops over and makes the array go from 0-99
//OR
const range = [...Array(100).keys()]; //keys returns (iterator) the entire index of the array (0 to n)

//remove duplicates from an array
const unique = [...new Set(arr)];

//get a random element
const random = arr[Math.floor(Math.random() * arr.length)];

//loop over a key-value pair
for(const [i, val] of arr.entries()) {
    console.log(i, val);
}

//Other array methods
arr.forEach();
arr.map()
arr.filter(); //find similar elements
arr.find(); //find desired element
arr.findIndex(); //find index of desired element
arr.reduce(); //take array and calc a single value from it