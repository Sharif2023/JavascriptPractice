//Random Number Generator

// let randomNum = Math.random();//between 0 & 1
// let randomNum = Math.random() * 6;//between 0 & 6
// let randomNum = Math.floor(Math.random() * 6); //decimal
// let randomNum = Math.floor(Math.random() * 100)+1; //1 to 100 decimal

//min max between random number
const max = 100;
const min = 50;

let randomNum = Math.floor(Math.random() * (max - min))+min; //between 50 & 100
console.log(randomNum);