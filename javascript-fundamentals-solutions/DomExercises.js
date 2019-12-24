//1
var section = document.getElementById("container");
//2
var section = document.querySelector("#container");
//3
var list = document.getElementsByClassName("second");
//4
var items = document.querySelector("ol .third");
//5
var sec = document.getElementById("container");
sec.innerText = "Hello!"; //this line affect the next manipulations
//6
var divFooter = document.getElementsByClassName("footer")[0];
divFooter.classList.add("main");
//7
divFooter.classList.remove("main");
//8
var li = document.createElement("li");
//9
li.innerText = "four";
//10
var list = document.querySelector("ul");
list.appendChild(li);
//11
var lis = document.querySelectorAll("ol li");
for(var i=0;i<lis.length;i++){
    lis[i].style.backgroundColor="green";
}
//12
var divFooter = document.querySelector(".footer");
divFooter.remove();