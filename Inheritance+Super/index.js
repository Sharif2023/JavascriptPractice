//inheritance+super
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, age, runspeed) {
//         super(name, age);
//         this.runspeed = runspeed;
//     }
// }
// class Fish extends Animal {
//     constructor(name, age, swimspeed) {
//         super(name, age);
//         this.swimspeed = swimspeed;
//     }
// }
// class Hawk extends Animal {
//     constructor(name, age, flyspeed) {
//         super(name, age);
//         this.flyspeed = flyspeed;
//     }
// }

// const rabbit = new Rabbit("Mini", 25, 200);
// const fish = new Fish("Hilsha", 20, 150);
// const hawk = new Hawk("bee", 10, 100);

// console.log(rabbit.name);
// console.log(fish.age);
// console.log(hawk.flyspeed);

//getter+setter

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    //setter
    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; //_height means it's a private property
        }
        else{
            console.log("Height must be a positive number");
        }
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; //_height means it's a private property
        }
        else{
            console.log("Width must be a positive number");
        }
    }

    //getter
    get height(){
        return `${this._height.toFixed(1)}cm`; //1 float index after decimal
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._height*this._width).toFixed(1)}cm^2`;
    }
}

//const rectangle = new Rectangle(-1000, "pizza"); //else command will be printed
const rectangle = new Rectangle(10, 20);

//for setter console won't print because setter is readable only. Output: undefined.
console.log(rectangle.height);
console.log(rectangle.width);
console.log(rectangle.area);
