//Typecast

let age = window.prompt("How old are you?");

age = Number(age);//it will convert string to number so output will 51 of input 50
age += 1;

console.log(age); //It'll show input 50 to output 501 (string) if we don't use number function

console.log(age, typeof(age));
console.log(age, typeof  age);

//another example
let x="pizza", y="pizza", z="pizza";
x=Number(x)
y=String(y)
z=Boolean(z)

console.log(x, typeof x); //NaN means not a number
console.log(y, typeof y);
console.log(z, typeof z);

//if there are no value in the x,y,z it will show 0,undefined,false output;