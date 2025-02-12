//how to accept user input

//1. Easy Way

// let username = window.prompt("What's your user name");
// console.log(username); //username input will be shown there

//2. Professional Way using html

let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("username").value;
    console.log(username);
    document.getElementById("myh1").textContent = `Hello ${username}`; //added next to h1 by adding id to h1 to change welcome text
}