function extractKey(arr,key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[])
}
console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

function filterLetters(arr,letter){
    letter = letter.toLowerCase();
    return arr.reduce(function(acc,next){
        if(next.toLowerCase()==letter) return acc+1;
        return acc;
    },0)
}
console.log(filterLetters(["a","a","b","c","A"], "a"));
console.log(filterLetters(["a","a","b","c","A"], "z"));
console.log(filterLetters(["a","a","b","c","A"], "B"));

function addKeyAndValue(arr,key,value){
    return arr.reduce(function(acc,next){
        next[key]=value;
        acc.push(next);
        return acc;
    },[]);
}
console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));

//It's possible to reduce an array starting from the end and moving backwards -> reduceRight