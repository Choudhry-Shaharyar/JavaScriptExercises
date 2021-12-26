// object literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'soccer', 'singing'], // an array
    // embedded object
    address: {
        street: '50 main st',
        city: 'Toronto',
        province: 'Ontario'
    }
}
console.log(person);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.firstName, person.lastName);
console.log(person.address.city);

// pulling out info from person object
const {firstName, lastName, address:{ city }} = person;
console.log(city);
console.log(firstName);
console.log(lastName);

// adding item/variable to person object
person.email = 'johndoe@gmail.com'
console.log(person);

const todos = [
{
    id: 1,
    text: 'Take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Zoom meeting',
    isCompleted: true
},
{
    id: 3,
    text: 'Doctor appt',
    isCompleted: false
}
];

console.log(todos[2].text);

const todoJSON = JSON.stringify(todos); // converts todos into JSON format
console.log(todoJSON);

// For loop

for(let i =0; i < todos.length; i++){
    console.log('Task #' + i + ' '  + todos[i].text);
}

// for of

for(let todo of todos){
    console.log(todo.id);
}

// for each, map, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText = todos.map(function(variable){
    return variable.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(variable){
    return variable.isCompleted === true; // assigns objects that have attribute isCompleted="true" to variable todoCompleted
}).map(function(var2){ // assigning the text attribute of the 2 objects to todoCompleted
    return var2.text
});
console.log(todoCompleted);



// while
let i = 0;
while(i <= 3 ){
    console.log('while loop number: ' + i);
    i++;
}