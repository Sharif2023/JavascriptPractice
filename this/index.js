//this

const person1 = {
    name: "Spongebob",
    Age: 30,
    helloFunc: function(){console.log(`Hello I'm ${this.name}`)},
}

person1.helloFunc();