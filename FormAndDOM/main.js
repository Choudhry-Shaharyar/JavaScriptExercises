
// // ES6 CLASSES
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   // Get Birth Year
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   // Get Full Name
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const person1 = new Person('John', 'Doe', '7-8-80');
// console.log(person1.getBirthYear());


// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));



// // MANIPULATING THE DOM
const ul = document.querySelector('.items');
ul.remove();
ul.remove();
ul.remove();

// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';


// // EVENTS

// Mouse Event
// btn.addEventListener('click', e => {
//   e.preventDefault(); // prevents information from being submitted
//   console.log(e.target.className);
//   document.getElementById('my-form').style.background = '#ccc';
//   document.querySelector('body').classList.add('bg-dark');
//   ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// // Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//   document.querySelector('.container').append(nameInput.value);
// });


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    alert('Please enter all fields');
    msg.classList.add('error'); // adding .error css design to .msg
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');


  // Add HTML
  li.innerHTML = `<strong>${nameInput.value}</strong>: ${emailInput.value}`;

  // Append to ul
  userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';

    
  }
}