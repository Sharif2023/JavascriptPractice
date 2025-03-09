//Nested Object

class Person{
    constructor(name, age, ...address){ //... = rest parameter
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, 
    "123 Mugda", "Dhaka", "Bangladesh");

const person2 = new Person("Patrick", 35, 
        "123 Mirpur", "Dhaka", "Bangladesh");

const person3 = new Person("Squidward", 40, 
            "321 dawki", "Asam", "India");



console.log(person1.address.street);