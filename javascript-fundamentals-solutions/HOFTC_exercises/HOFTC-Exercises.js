console.log("Countdown: ");
function countDown(value){
    var count=setInterval(function(){
        value--;
        if(value==0) {
            clearInterval(count);
            console.log("DONE!")
        }else{
            console.log(value);
        }
    },1000);
}
//countDown(4);
console.log("Random Game: ");
function randomGame(){
    var count=0;
    var randomId=setInterval(function(){
        var random=Math.random();
        if(random>.75) {
            clearInterval(randomId);
            console.log(count);
        }else count++;
    },1000);
}
//randomGame()
console.log("Is Even: ");
function isEven(n){
    return (n%2==0);
}
console.log(isEven(2));
console.log(isEven(3));

console.log("Is Odd: ");
function isOdd(n){
    return (n%2!=0);
}

console.log(isOdd(3));
console.log(isOdd(14));

console.log("Is prime: ");
function isPrime(n){
    for(var i=2;i*i<=n;i++){
        if(n%i==0) return false;
    }
    return true;
}
console.log(isPrime(8));
console.log(isPrime(17));

console.log("Number Fact: ");
function numberFact(n,func){
    return func(n);
}
console.log(numberFact(59,isEven));
console.log(numberFact(59,isOdd));
console.log(numberFact(59,isPrime));

console.log("Find: ");
function find(arr,func){
    for(var i=0;i<arr.length;i++){
        if(func(arr[i])) return arr[i];
    }
}
console.log(find([8,11,4,27], function(val){return val >= 10}));
console.log(find([8,11,4,27], function(val){return val === 5}));

console.log("Find Index: ")
function findIndex(arr,func){
    for(var i=0;i<arr.length;i++){
        if(func(arr[i])) return i;
    }
}
console.log(findIndex([8,11,4,27], function(val){return val >= 10}));
console.log(findIndex([8,11,4,27], function(val){return val === 7}));

function specialMultiply(a,b){
    var t=arguments.length;
    if(t>1){
        return a*b;
    }else{
        return function(b){
            return a*b;
        }

    }
}

console.log(specialMultiply(3,4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3));

