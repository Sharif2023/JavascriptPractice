//map


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formateDates);

console.log(formattedDates);

function formateDates(elements) {
    const parts = elements.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}


///* Arrow Function *///

//arrow function without parameter

const hello = () => console.log("Hello!!!");
hello();

//arrow function with parameter

const myName = (name) => console.log(`My name is ${name}`);
myName("Sharif");

//more console log with {}

const myAge = (age) => {
    console.log(`My age is ${age}`)
    console.log(`Next year I'll 28`)
};
myAge(27);

//multiple parameter

const myNameAge = (myname, myage) => {
    console.log(`My name is ${myname}`)
    console.log(`My age is ${myage}`)
};
myNameAge("Sharif", 27);



const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cube = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element%2 ===0);
const oddNums = numbers.filter((element) => element%2 !==0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(cube);
console.log(evenNums);
console.log(oddNums);
console.log(total);