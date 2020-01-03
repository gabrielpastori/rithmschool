function printFirstAndLast(arr){
    arr.forEach(val => {

        console.log(val[0]+val[val.length-1]);
    });
}
printFirstAndLast(['awesome','example','of','forEach']);

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key]=value;
    });
    return arr;
}
console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));

function valTimesIndex(arr){
    return arr.map(function(val,index){
        return val*index;
    });
}
console.log(valTimesIndex([1,2,3]));
console.log(valTimesIndex([5,10,15]));

function extractKey(arr,key){
    return arr.map(function(val){
        return val[key];
    });
}
console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name")
);

function filterLetters(arr,letter){
    var count=0;
    arr = arr.filter(function(val){
        return val.toLowerCase()==letter.toLowerCase();
    });
    return arr.length;
}
console.log(filterLetters(["a","a","b","c","A"], "a"));
console.log(filterLetters(["a","a","b","c","A"], "z"));
console.log(filterLetters(["a","a","b","c","A"], "B"));

function filterKey(arr,key){
    return arr.filter(function(val){
        return val[key]==true;
    });
}
console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")
);