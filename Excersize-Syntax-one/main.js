console.log('hello world');
console.error('this is an error! ');
console.warn('this is a warning!');

// variables
// ES6 added Varaibles: let: able to reassign values, const: remains constant

let score = 3;
score = 4;
console.log(score);

const keyboard = 'keychron k8';
console.log(keyboard);

// primative data types: Strings, Numbers, Boolean. null, undefined
let name = 'Andrew'; // typeof -> string
const age = 32; // typeof -> number
const rating = 4.5; // typeof -> number
const isCool = true; // typeof -> boolean
const x = null; // typeof -> bogus object
const y = undefined; // typeof -> undefined
let z; // z is also undefined because it is not assigned to anything

console.log(typeof age);

// concactenation

console.log('My name is ' + name + ' and I am ' + age);
console.log(`My name is ${name} and I am ${age}`);

const s = 'hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(6,11));
console.log(s.substring(6,11).toUpperCase());
const fruit = 'apple,orange,bannana, pear';
console.log(fruit.split(",")); // creats an array of string (4 items)

// Arrays: holds multiple values

const numbers = new Array (1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears',10 , true]; // contents can be of different types
console.log(fruits);
console.log(fruits[4]);
console.log(fruits[0]);

//adding a item to the array

fruits[5] = 'mangoes';
fruits.push('grapes');
fruits.unshift('strawberries');
console.log(fruits);

fruits.pop(); // removes last item from array
console.log(fruits);

// checks to see if variable is an array
console.log(Array.isArray(fruits));

console.log(fruits.indexOf('mangoes')); // returns index of mangoes




