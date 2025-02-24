// hello(goodbye);


// function hello(){
//     console.log("Hello!!!");
// }

// function goodbye(){
//     console.log("Goodbye!!!");
// }

//output: Hello!!!


/*callback function*/

//Example-1
hello(goodbye);
late();

function hello(callback){
    console.log("Hello!!!");
    callback();
}

function goodbye(){
    console.log("Goodbye!!!");
}

//set timeout

function late(){
    setTimeout(function(){
        console.log("4 second late")
    }, 4000);
}

//Example-2

sum(display, 1, 2);

function sum(callback, x, y){
    result = x + y;
    callback(result);
}

function display(result){
    console.log(result);
}