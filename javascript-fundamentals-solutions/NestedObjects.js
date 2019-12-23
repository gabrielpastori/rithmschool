//Content part
var instructorData = {
   name: "Elie",
   additionalData: {
       instructor: true,
       favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
       moreDetails: {
           favoriteBasketballTeam: "New York Knicks",
           numberOfSiblings: 3,
           isYoungest: true,
           hometown: {
               city: "West Orange",
               state: "NJ",
           },
           citiesLivedIn: ["Seattle", "Providence", "New York"]
       }
   }
};
var displayCities = () => {
   var cities = instructorData.additionalData.moreDetails.citiesLivedIn ;
   for(var i=0;i<cities.length;i++){
      console.log(cities[i]);

   }
   
};
var displayHomeTownData = () => {
   var homeTown = instructorData.additionalData.moreDetails.hometown;
   for(var i in homeTown){
      console.log(homeTown[i]);
   }
}
var addDetail = (key,value) => {
   instructorData.additionalData.moreDetails[key]=value;
}
var removeDetail = (key) => {
   delete instructorData.additionalData.moreDetails[key];

}
displayCities();
displayHomeTownData();
addDetail("isHilarious",true);
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
console.log(instructorData);

//Exercises - Part I

var nestedData = {
   innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
         primeNumbers: [2,3,5,7,11],
         fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
         this.snacks.push(snack);
         return this;
      }
   }
};

var showPrimes = () => {
   var primes = nestedData.innerData.numberData.primeNumbers;
   console.log("Primes:");
   for(var i=0;i<primes.length;i++){
      console.log(primes[i]);
   }
};
showPrimes();
var showFibonnaciNumbers = () => {
   var fiboN = nestedData.innerData.numberData.fibonnaci;
   console.log("Fibonnaci Numbers:")
   for(var i=0;i<fiboN.length;i++){
      console.log(fiboN[i]);
   }
};
showFibonnaciNumbers();
var showSecond = () => {
   console.log("Second inside the order array:");
   var second = nestedData.innerData.order;
   console.log(second[1]);
};
showSecond();

var invokeAddSnack = () => {
   nestedData.innerData.addSnack("Chocolate");
}
invokeAddSnack();
console.log(nestedData);


//Exercises - Part II
var nestedObject = {
   speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
   data: {
      continents: {
         europe: {
         countries: {
            switzerland: {
               capital: "Bern",
               population: 8000000
            }
         }
         }
      },
      languages: {
         spanish: {
            hello: "Hola"
         },
         french: {
            hello: "Bonjour"
         }
      }
   }
}

var addSpeaker = (value) => {
   nestedObject.speakers.push({"name":value});
}
addSpeaker("Gabriel");

var addLanguage = (key,value) => {
   nestedObject.data.languages[key]={hello:value};
}
addLanguage("Portuguese","Olá");

var addCountry = (name,capital,population) => {
   nestedObject.data.continents.europe.countries["name"] = {capital:capital,population:population};
}
addCountry("Denmark","Copenhage",5781437);
console.log(nestedObject.data.continents.europe.countries);