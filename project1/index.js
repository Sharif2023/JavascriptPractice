//const = a variable that can't be changed

const PI = 3.1416;
let radius;
radius = Number(radius);
let circumferance;

//PI = 420.15; not work because can't reassign const

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("radius").value
    circumferance = 2*PI*radius;
    document.getElementById("myh3").textContent = circumferance;
}