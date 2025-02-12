//variable declaration & assignment

let name = "Sharif", price = 10.99, age= 10, isStudent= true;
console.log(`My name is ${name} and my age is ${age} and I bought a pen of ${price} tk `);

console.log(typeof age); //output: number
console.log(typeof name); //output: string

let online= true;
console.log(typeof online); //output: boolean

//p1 output showing
document.getElementById("myName").textContent = `My name is ${name}`;
document.getElementById("age").textContent = `My age is ${age}`;
document.getElementById("isStudent").textContent = `Student Status: ${isStudent}`;