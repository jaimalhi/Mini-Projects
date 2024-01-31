//* Cumulative Sum
//create a function that takes an array of numbers and returns a number that is the sum of all values in the array
const arr = [1,3,5,7];
const sum1 = arr.reduce((accumulated, curr) => accumulated + curr, 0); //sum = 16
// OR
export function cumulativeSum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
// console.log('Sum: ', cumulativeSum(arr));


//* Recursive Binary Search
//create a function that takes a sorted array and target value, return the index of the target value
//if the target value does not exist, return -1
export function search(arr, target, start=0, end=arr.length-1){
    //base case
    if(start > end){
        console.log('Not Found!');
        return -1
    }

    const middle = Math.floor((start+end)/2); //floor to return int value
    
    if(arr[middle] === target){
        console.log(`${target} found at index ${middle}`);
        return middle;
    }
    if(arr[middle] > target){
        return search(arr, target, start, middle-1);
    }
    if(arr[middle] < target){
        return search(arr, target, middle+1, end);
    }
}
console.log(search(['a','b','c','x','y','z'],'x'));

//* Least Recently Used (LRU) Cache
// Create a data structure that implements the requirements of a Least Recently Used (LRU) cache with O(1) average time complexity.
// - Initialize an object with a maxium capacity of elements.
// - getItem Return the value of the key. Update cache with the most recently used key.
// - putItem Create or update a key value pair in the cache. Evict the least recently used key if the size of keys exceeds the max capacity
class LRU {
    constructor(capacity){
        this.capacity = capacity;
        this.cache = new Map();
    }

    getItem(key){
        const item = this.cache.get(key);

        // Map keeps track of insertion order, this will refresh the item
        if(item){
            this.cache.delete(key);
            this.cache.set(key, item);
        }
        return item;
    }

    putItem(key, val){
        // delete to refresh the insertion order
        if(this.cache.has(key)){
            this.cache.delete(key);
        }
        // evict the oldest item in the cache
        else if(this.cache.size == this.capacity){
            this.cache.delete(this.oldestItem);
        }

        this.cache.set(key, val);
    }

    get oldestItem(){
        return this.cache.keys().next().value;
    }
}

const cache = new LRU(5);
cache.putItem('a', 1);
cache.getItem('a');

//* TDD with Vitest (test driven development)
//Use {https://vitest.dev/} to create a few basic unit test for the algorithims in the previous lessons.
// - npm init -y
// - npm i -D vitest
//Update the package.json with a test script.
// "scripts": {
//     "test": "vitest"
// }
// ^ replaced {"test": "echo \"Error: no test specified\" && exit 1"} with {"test": "vitest"}
// adding {"type": "module"} allows us to use ES imports in JS
// {node_modules} is from NPM 
// tests written in {main.test.js} for Vitest
