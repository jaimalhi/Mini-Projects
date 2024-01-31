//* 3 Types of variable initialization
// var -> orginal flavor (avoid)
// let -> can be reassigned
// const -> cannot be reassigned

//* We can also get elements from the dom, this is one way to do it 
const btn = document.querySelector('button');
//add event listener via arrow syntax
btn.onclick = () => {
    alert('you clicked me');
}

//* We can use functions & objects in JS
class Human {
    constructor(){
        this.dna = 'TCAG';
    }
    walk(){
        console.log('going for a walk...');
    }
}

//* we can work asynchronously with Promise API
const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('thank you for waiting')
    }, 1000);
});

wait.then(doSomething).catch(handleError)

//* JS can also run on the server thanks to NodeJS
import { readFile } from 'fs/promises';

readFile('./the-anatomy-of-the-state.txt', 'utf-8');
//execute NodeJS code via the terminal and typing node filename.js