//Content Part
var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
console.log("Print the evens numbers in the nestedArr");
function printEvens(){
    for(var i=0; i<nestedArr.length;i++){
        for(var j=0;j<nestedArr[i].length;j++){
            var e = nestedArr[i][j];
            if(e%2==0){
                console.log(e);
            }
        }
    }
}
printEvens();

var nestedArr = [[1, 2], [3, 4], [5, 6]];

console.log("Return the total sum of the numbers in the nestedArr");
function sumTotal(){
    var t=0;
    for(var i=0; i<nestedArr.length;i++){
        for(var j=0;j<nestedArr[i].length;j++){
            var e = nestedArr[i][j];
            t+=e;
        }
    }
    return t;
}
console.log(sumTotal());

var nestedArr = [
    "Elie",
    ["Matt", ["Tim"]],
    ["Colt", ["Whisky", ["Janey"], "Tom"]],
    "Lorien"
];

console.log("Count Vowels in nestedArr: ");
function vowelString(str){
    var count=0,vowels='aeiou';
    for(var i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase())) count++;
    }
    return count;
}
function countVowels(arr){
    var t=0;
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            t+=countVowels(arr[i]);
        }else{
            t+=vowelString(arr[i]);
        }
    }
    return t;
}
console.log(countVowels(nestedArr));

//Exercises
console.log("Rotate a array")
function rotate(arr,n){
    var l = arr.length;
    var aux=[];
    for(var i=0;i<l;i++){
        var p = (i+n)%l;
        aux[p]=arr[i];
    }
    return aux;
}
/*
Another way of rotate:
function rotate(arr,n){
    var t = n%arr.length;
    for(var i=0;i<n;i++){
        arr.unshift(arr.pop());
    }
    return arr;
}*/
console.log(rotate([1,2,3], 1));
console.log(rotate([1,2,3], 2));
console.log(rotate([1,2,3], 3));

console.log("make a grid of subarrays");

function makeXOGrid(rows,columns){
    var arr=[];
    for(var i=0;i<rows;i++){
        var row=[]
        for(var j=0;j<columns;j++){
            var t = i*columns + j;
            row.push((t%2==0?"X":"O"));
        }
        arr.push(row);

    }
    return arr;

}
console.log(makeXOGrid(1,4));
console.log(makeXOGrid(3,2));
console.log(makeXOGrid(3,3));
