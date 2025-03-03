//User

class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }

    sayHello(){
        console.log(`Hello! My name is ${this.userName}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();