// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

const a = 'test';
let b = true;
let c = 789;
let a = 'test2';



// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const {firstName, lastName, age, eyeColor} = person;
console.log(firstName); 
console.log(lastName); 
console.log(age);
console.log(eyeColor);


// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// Object properties
const a = 'test';
const b = true;
const c = 789;

// const okObj = {
//   a: a,
//   b: b,
//   c: c
// };

const obja = {a, b, c}

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

let firstName = "Felipe";
let city = "SP";

let message = `Helo ${firstName} have I met you before? I think we met in ${city} last summer no??? `;


// default arguments
// default age to 10;
function isValidAge(age= 10) {
    return `${age}`;
}

// Symbol
// Create a symbol: "This is my first Symbol"
let sym1 = Symbol("This is my first Symbol")

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI2 = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}