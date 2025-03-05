//Destructing = extract values from arrays and objects,
//              then assign them to variables in a convenient way
//              [] = to perform array destructing
//              {} = to perform object destructing

//-----Example-1---------
//Swap the value

let a = 1, b = 2;
[a, b] = [b, a];

console.log(a, b);

//------Example-2--------
//Swap two elements in an array

// const colors = ["red", "green", "blue", "black", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

//output: ['white', 'green', 'blue', 'black', 'red']

//--------Example-3---------
//Assign Array Elements to Variables

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColor] = colors; // ... = means remaining elements

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColor);

//----------Example-4---------
//Extract Values from objects

const person1 = {
    firstName: "Spongebob",
    lastName: "SqurePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 25,
}

const { firstName, lastName, age, job = "Unemployed" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//-----------Example-5----------
// Destructure in function parameters

function displayPeople({ firstName, lastName, age, job = "unemployed" }) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const people1 = {
    firstName: "Spongebob",
    lastName: "SqurePants",
    age: 30,
    job: "Fry Cook",
}

const people2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 25,
}

displayPeople(people1); //Though job assigned it will  work for people1 job
displayPeople(people2); //job assigned for people2
