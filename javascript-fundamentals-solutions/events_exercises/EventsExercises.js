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

console.log("Add the new div to the page (in the section tag):")
section.appendChild(newDiv);

//Exercises - Part II
var bt = document.querySelector("button");

function start(){
    var blockA = document.querySelector(".car1");
    var blockB = document.querySelector(".car2");
    blockA.style.marginLeft=0;
    blockB.style.marginLeft=0;
}
function finish(){
    var blockA = document.querySelector(".car1");
    var blockB = document.querySelector(".car2");
    blockA.style.marginLeft=0;
    blockB.style.marginLeft=0;

}
bt.addEventListener("click",function(){
        var min=60;
        var max=100;
        var x=0;
        var blockA = document.querySelector(".car1");
        var blockB = document.querySelector(".car2");
        start();
        var corrida = setInterval(function(){
            blockA.style.marginLeft = parseInt(blockA.style.marginLeft)+Math.random() * (+max - +min) + +min+"px";
            blockB.style.marginLeft =parseInt(blockB.style.marginLeft)+Math.random() * (+max - +min) + +min+"px";
            var distA = parseInt(blockA.style.marginLeft);
            var distB = parseInt(blockB.style.marginLeft);


            if(parseInt(blockA.style.marginLeft)>window.innerWidth && distA>=distB){
                alert("car 1 is the winner!");
                clearInterval(corrida);
                finish();
                
            }
            if(parseInt(blockB.style.marginLeft)>window.innerWidth && distA<=distB){
                alert("car 2 is the winner!");
                
                clearInterval(corrida);
                finish();
                
                
            }
            x++;
        }
        
        
        ,300);

    }

);