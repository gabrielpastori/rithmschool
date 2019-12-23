//Content Part
function each(arr,func){
    for(var i=0;i<arr.length;i++) func(arr[i]);
}

each([1,2,3,4], function(val){
    console.log(val);
});

each([1,2,3,4], function(val){
    console.log(val*2);
});

function map(arr,func){
    for(var i=0;i<arr.length;i++){
        arr[i]=func(arr[i]);
    }
    return arr;
}
console.log(map([1,2,3,4], function(val){
    return val * 2;
}))

function reject(arr,func){
    aux=[];
    for(var i=0;i<arr.length;i++){
        if(!func(arr[i])) aux.push(arr[i]);
    }
    return aux;
}
console.log(reject([1,2,3,4], function(val){
    return val > 2;
}));
console.log(reject([2,3,4,5], function(val){
    return val % 2 === 0;
}));