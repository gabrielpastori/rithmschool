//Exercises - Part I

console.log("changes 'Change me' text to 'Hello World!': ");
var change = document.querySelector("#change_heading");
change.innerText = "Hello World!";

console.log("Hover color: ");
var section = document.querySelector("section");
var span = document.querySelector(".selected");
span.innerText = "None!"
section.addEventListener("mouseover",function(event){
    var div =event.target.classList[0];
    if(typeof(div)!='undefined'){
        span.style.color=div;
        span.innerText=div;
    }
}   
);

console.log("Create a new div: ");
var newDiv = document.createElement('div');

console.log("Class and background purple: ");
newDiv.classList+="purple";
newDiv.style.backgroundColor="purple";
section.appendChild(newDiv);