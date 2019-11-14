// Example Project

const ulItems = document.querySelector(".items");

//ulItems.remove();

//ulItems.lastElementChild.remove();

ulItems.firstElementChild.textContent = "Hello World!!";

ulItems.children[1].innerText = "Bappy";

ulItems.lastElementChild.innerHTML = "<h1>Hello Bappy</h1>";

const btn = document.querySelector(".btn");
//btn.style.background = "White";

btn.addEventListener("click", (event) => {
    event.preventDefault();
    //console.log("Button Clicked!!");
    //console.log(event.target.className);
    //console.log(event.target.id);
    document.querySelector("#my-form").style.background = "#ccc";
});

console.log(window);

//alert(2);


// Single Element
const form = document.getElementById("my-form");
console.log(form);

console.log(document.querySelector(".container"));
console.log(document.querySelector("h1"));

// Multiple Element
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));

console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");
items.forEach((itemElement) => console.log(itemElement));


/*

// Crash Course On JavaScript

// OOP Examples
function PersonObject(firstName, lastName, d_o_b) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.d_o_b = new Date(d_o_b);
}


PersonObject.prototype.getBirthYear = function() {
    return this.d_o_b.getFullYear();
}

PersonObject.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}


const firstPerson = new PersonObject("John", "doe", "03-20-1985");

const secondPerson = new PersonObject("Steve", "Austin", "26-9-1969");

console.log(firstPerson);

console.log(secondPerson.firstName);

console.log(firstPerson.d_o_b.getFullYear());

console.log(secondPerson.d_o_b.getFullYear());

console.log(firstPerson.getBirthYear());

console.log(secondPerson.getFullName());

console.log(firstPerson.getFullName());

// Using Class
class AnotherPerson {
    constructor(firstName, lastName, d_o_b) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.d_o_b = new Date(d_o_b);
    }

    retriveBirthYear() {
        return this.d_o_b.getFullYear();
    }

    transformFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const firstDummy = new AnotherPerson("Julio", "Matterhorn", "03-03-1985");

const secondDummy = new AnotherPerson("Cilica", "Rothman", "5-5-1978");

console.log(firstDummy);

console.log(firstDummy.retriveBirthYear());

console.log(secondDummy.transformFullName());

function PersonObject(firstName, lastName, d_o_b) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.d_o_b = new Date(d_o_b);
    this.getBirthYear = function() {
        return this.d_o_b.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}


class PersonObject {
    constructor(firstName, lastName, d_o_b) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.d_o_b = d_o_b;
    }
}

// Functions 
function addNumbers(numberFirst, numberSecond) {
    //console.log(numberFirst + numberSecond);
    return numberFirst + numberSecond;
}

//addNumbers(5,15);
console.log(addNumbers(5,15));


const sumNumbers = (numberFirst, numberSecond) =>numberFirst+numberSecond;

console.log(sumNumbers(5,15));


// Conditionals Statements
let anyNumber = 20;

if(anyNumber == 10) {
    console.log('Any Number : '+anyNumber);
}

let someNumber = '10';

if(someNumber === 10) {
    console.log('Some Number : '+someNumber);
}

if(anyNumber === 10) {
    console.log('Another Number : '+anyNumber);
} else if ( anyNumber > 10){
    console.log('Greter Than Number 10');
} else {
    console.log('Less Than Number 10');
}

if( anyNumber > 5 || someNumber > 10 ) {
    console.log(anyNumber +" Is Greater Than 5 Or someNumber "+someNumber+" Is Greater Than 10")
}

if( anyNumber > 5 && someNumber > 10 ) {
    console.log(anyNumber +" Is Greater Than 5 Or someNumber "+someNumber+" Is Greater Than 10")
}

// Ternary Operator
const numberVariable = 10;

const color = numberVariable > 10 ? 'red' : 'blue';

console.log(color);


const colorVariable = numberVariable < 11 ? 'red' : 'blue';

console.log(colorVariable);


// Switch Statements
let colorSwitch =  'green';

switch(colorSwitch) {
    case 'red' :
        console.log("Color Red");
        break;
    case 'blue' :
        console.log("Color Blue");
        break;
    case 'green' :
        console.log("Color Green");
        break;
    default:
        console.log("Color Unmatched");
        break;
}


// Object Literals - Key : Value 
const somePerson = {
    firstNme : 'John',
    lastName : 'Doe',
    age : 31,
    hobbies : ['music', 'movies', 'travelling', 'sports'],
    addres : {
        Street : '5th Avenue Greeenwich',
        City : 'New York',
        State : 'NY'
    }
}

console.log(somePerson);

console.log(somePerson.firstNme, somePerson.lastName, somePerson.hobbies);

console.log(somePerson.hobbies[1]);

console.log(somePerson.addres.City);



const { firstNme, lastName, addres: {City, State} } = somePerson;

console.log(firstNme, lastName);

console.log(firstNme, lastName, City, State);


somePerson.email = 'johndoe@email.com';

console.log(somePerson);


// Arrays Of Multiple Objects
const todos = [
    {
        id : 1,
        text : 'Clean Garbage',
        isCompleted : true

    },

    {
        id : 2,
        text : 'Team Meeting',
        isCompleted : false

    },

    {
        id : 3,
        text : 'Freshen Up',
        isCompleted : true
    }
];

console.log(todos);

console.log(todos[1].text);

// JSON Conversion
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// Some Looping
for(let counter = 0; counter < 10; counter++) {
    console.log(`Loop Counter : ${counter}`);
}

let counter = 0;
while(counter < 10) {
    console.log(`While Counter : ${counter}`);
    counter++;
}

for(let counter = 0; counter < todos.length; counter++) {
    console.log(todos[counter].text);
}

for(let todoKey of todos) {
    console.log(todoKey.id);
    console.log(todoKey.isCompleted);

}


// Higher Order Array Functions
todos.forEach(function(todoKey) {
    console.log(todoKey.text);
});

const todosText = todos.map(function(todoKey) {
    return todoKey.text;
});

console.log(todosText);

const todosCompleted = todos.filter(function(todoKey) {
    return todoKey.isCompleted === true;
});

console.log(todosCompleted);

const todoCompleted = todos.filter(function(todoKey) {
    return todoKey.isCompleted === true;
}).map(function(todoKey) {
    return todoKey.text;
});

console.log(todoCompleted);


// Arrays - variables that hold multiple values.

const numbersArray = new Array(1,2,3,4,5);

console.log(numbersArray);

const someArray = ['apples', 'oranges', 'true', 'false', 1, 2];

console.log(someArray);

var showItem = someArray[5];

console.log(showItem);

console.log(someArray[2]);

someArray[3] = 'Neshpati';

console.log(someArray);

numbersArray.push('Some Entry');

console.log(numbersArray);

numbersArray[6] = 'Another Entry';

console.log(numbersArray);

numbersArray.unshift(8);

console.log(numbersArray);

numbersArray.pop();

console.log(numbersArray);

console.log(Array.isArray(numbersArray));

console.log(Array.isArray("Hello There??!!"));

console.log(Array.isArray(someArray));

console.log(someArray.indexOf("Neshpati"));


// String Concatenation
let somePerson = "Johnny Lynn";
let someAge = 30;
console.log("Anonymous Name : " + somePerson + "Age Given : "+someAge);

// Template Literals
const literalsExample = `Anonymous User : ${somePerson} Provided Age : ${someAge}`;

console.log(literalsExample);

// Some Common String Methods
console.log(somePerson.length);

console.log(somePerson.toUpperCase());

console.log(somePerson.toLowerCase());

console.log(somePerson.substring(0,7));

console.log(somePerson.substring(0,6).toUpperCase());

console.log(somePerson.split(''));

let morePersons = "John Doe, Samuel Jackson, John Wick, Shoe Maecker";

console.log(morePersons.split(", "));



// String, Numbers, Boolean, Null, Undefined

let someName = "John Doe";
let someNumber = 30;
let someFloat = 4.5;
let someBoolean = true;
let someNull = null;
let someUndefined = undefined;
let anotherUndefined;
console.log(typeof someName)
console.log(typeof someNumber)
console.log(typeof someFloat)
console.log(typeof someBoolean)
console.log(typeof someNull)
console.log(typeof someUndefined)
console.log(typeof anotherUndefined)

console.log("Hello World");
console.error('This Is An Error');
console.warn("This Is A Warning");


let letValue = 30;

letValue = 31;

console.log(letValue);

const someValue = 30;

//someValue = 31;

console.log(someValue);

const exampleValue = 10;

console.log(exampleValue);

const someConst = true;

console.log(someConst)

*/