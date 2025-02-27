//Object

const person1 = {
    firstName: "Spongebob",
    lastName: "Squirepant",
    age: 30,
    isEmployed: false,
    helloFunc: function(){console.log("Hello! I'm Spongebob")},
}

const person2 = {
    firstName: "Pantrick",
    lastName: "Star",
    age: 35,
    isEmployed: true,
    helloFunc: () => {console.log("Hello! I'm Patrick")},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.helloFunc();
person2.helloFunc();


