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

// constructor function
//person object

function Person(firstname, lastname, dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    //functions
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstname} ${this.lastname}`;
    }
}

// instantiate object
const person1 = new Person('Andrew', 'Holland', '4-3-1992');

console.log(person1);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());