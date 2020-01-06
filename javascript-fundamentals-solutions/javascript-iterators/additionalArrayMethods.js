//Content Part
var arr = [1,2,3,4,5]
function isNumberOdd(val){
    return val%2!=0;
}
function doubleValue(val){
    return val*2;
}
function sum(acc,next){
    return acc+next;
}

console.log(
    arr.filter(isNumberOdd)
    .map(doubleValue)
    .reduce(sum)
);

//Exercises - Part I
var users = [
{
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
    city: 'San Francisco',
    state: 'CA'
    }
},
{
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
    city: 'New York',
    state: 'NY'
    }
},
{
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
    city: 'Fargo',
    state: 'SD'
    }
},
{
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
    city: 'Albany',
    state: 'NY'
    }
},
{
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
    city: 'Los Angeles',
    state: 'CA'
    }
}
];
function printEmails(){
    users.forEach(function(val){
        console.log(val.email);
    });
}
printEmails();

function printHobbies(){
    users.forEach(function(user){
        user['hobbies'].forEach(function(hobbie){
            console.log(hobbie);
        });
    });
}
printHobbies();

function findHometownByState(state){
    return users.find(function(val){
        return val.hometown.state == state;
    });    
}
console.log(findHometownByState('CA'));

function countOccurrences(arr,val){
    return arr.reduce(function(acc,next){
        if(next==val) return acc+1;
        return acc;
    },0)

}
function allLanguages(){
    all = [];
    users.filter(function(val,index,arr){
        all = all.concat(val['favoriteLanguages']);
    });
    return all.filter(function(val,index){
        return all.indexOf(val)==index;
    }
    );

}
console.log(allLanguages());
function hasFavoriteEditor(editor){
    return users.some(function(val){
        return val['favoriteEditor']==editor;
    })
}
console.log(hasFavoriteEditor('VS Code'));
console.log(hasFavoriteEditor('Eclipse'));

function findByUsername(name){
    return users.find(function(val){
        return val.username == name;
    })
}
console.log(findByUsername('david'));
 
