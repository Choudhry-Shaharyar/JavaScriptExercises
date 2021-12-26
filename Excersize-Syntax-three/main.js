// conditionals
const x = 10;

if(x == '10'){
    console.log('x= 10');
} 

// === checks to see if data type is same aswell
if(x === '10'){
    console.log('x= 10');
} else{
    console.log('x is not 10');
}

if(x === 10){
    console.log('x= 10');
}

// arrow function

const addNums = (num1 = 1, num2 = 1) => {
    return num1+num2;
}
console.log(addNums());
console.log(addNums(4,2));


// constructor function
//person object
// OOP in ES5 - Pre Classes
// function Person(firstname, lastname, dob){
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstname} ${this.lastname}`;
// }

// Class OOP 
class Person{
    constructor(firstname, lastname, dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}

// instantiate object
const person1 = new Person('Andrew', 'Holland', '4-3-1992');

console.log(person1);
console.log(person1.getBirthYear());
console.log(person1.getFullName());
