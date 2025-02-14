//method chaining = calling one method after another
                    //in one continuous line of code

//-------No method chaining---------

// let username = window.prompt("Enter your username: ");

// username = username.trim(); //space remove
// let letter = username.charAt(0);
// letter = letter.toUpperCase(); //Make first character Big

// let extrachars = username.slice(1); //index 1 to other
// extrachars = extrachars.toLocaleLowerCase(); //make extras to small char
// username = letter + extrachars; //merge 1st chart + extra chars

// console.log(username);

//------Method Chaining--------
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);