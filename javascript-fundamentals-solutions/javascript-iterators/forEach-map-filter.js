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
