class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal {
    constructor(name, age, runspeed) {
        super(name, age);
        this.runspeed = runspeed;
    }
}
class Fish extends Animal {
    constructor(name, age, swimspeed) {
        super(name, age);
        this.swimspeed = swimspeed;
    }
}
class Hawk extends Animal {
    constructor(name, age, flyspeed) {
        super(name, age);
        this.flyspeed = flyspeed;
    }
}

const rabbit = new Rabbit("Mini", 25, 200);
const fish = new Fish("Hilsha", 20, 150);
const hawk = new Hawk("bee", 10, 100);

console.log(rabbit.name);
console.log(fish.age);
console.log(hawk.flyspeed);