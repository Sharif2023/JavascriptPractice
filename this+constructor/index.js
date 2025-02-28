//this

const person1 = {
    name: "Spongebob",
    Age: 30,
    helloFunc: function(){console.log(`Hello I'm ${this.name}`)},
}

person1.helloFunc();

//Constructor

function car(name, model, year, color){
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    //function
    this.drive = function(){console.log(`You're Driving ${this.model} car`)}
}

// function car(name, model, year, color){
//     this.name = a;
//     this.model = b;    ///this type of code will also work///
//     this.year = c;
//     this.color = d;
// }

const car1 = new car("Toyota", "AB-12", 2025, "Blue");
console.log(car1);
car1.drive();
