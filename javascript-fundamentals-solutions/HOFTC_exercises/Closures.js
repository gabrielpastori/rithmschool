//Content Part
console.log("age function: ")
function age(){
    var t=0;
    return function(){
        return ++t;
    }
}
var age1=age();
console.log(age1());
console.log(age1());
console.log(age1());

console.log("class room function: ")
function classRoom(){
    teachers=["neumann","Jacob","Ghys"];
    return {
        showTeachers: function(){return teachers;},
        addTeacher: function(teacher){teachers.push(teacher);}
    };
}

var class1=classRoom();
console.log(class1.showTeachers());
class1.addTeacher("Marcelo");
console.log(class1.showTeachers());

var class2=classRoom();
console.log(class2.showTeachers()); //not affected by class1

//The arguments "array"

function add(){
    var sum=0;
    for(var i=0;i<arguments.length;i++) sum+=arguments[i];
    return sum;
}
console.log(add(1,3,5,7,9));

//Exercises

function createCounter(){
    var i=0;
    return function (){
        return ++i;
    }
}

var firstCounter = createCounter();

console.log(firstCounter());
console.log(firstCounter());
console.log(firstCounter());
console.log(firstCounter());


var secondCounter = createCounter();

console.log(secondCounter());
console.log(secondCounter());
console.log(secondCounter());



console.log(firstCounter());
console.log(firstCounter());


console.log(secondCounter());