//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

  //Your code here
var favoriteThings = {
  band: "Disturbed",
  food: "Chinese",
  person: "Someone",
  book: "The total Money Makeover",
  movie: "The Count of Monte Cristo",
  holiday: "Christmas"
}
//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Your code here
favoriteThings.car = "Mclaren P1";
favoriteThings.brand = "Hurley";
//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

  //Your code here
favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";
//Now, alert your favorite person, then alert your favorite book.

  //Your code here
alert(favoriteThings.person);
alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  //Your code here
function truthy(object) {
    for(var key in object) {
        if(!object[key]) {
            delete object[key];
        } else {
     console.log(object[key])
        }
    }
  }

truthy(user);
//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Your code here
user.name = "Alex";
user.username = "Chocmilklate";
//Now console.log your object and make sure it looks right.

  //Your code here

truthy(user);
console.log(user);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

  //Your code here
var methodCollection = {};
//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

  //Your code here
methodCollection.alertHello = function() {alert("hello")};
methodCollection.logHello = function() {console.log("hello")};
//Now call your alertHello and logHello methods. 

  //Your code here
methodCollection.alertHello();
methodCollection.logHello();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};
var myString = "i wonder how many of each vowel are in this sentence";


function voweler(str) {
  var separator = str.split("");
  var counta = 0;
  var counte = 0;
  var counti = 0;
  var counto = 0;
  var countu = 0;
  var myObject = {};
  for(var i = 0; i < separator.length; i++) {
    if (separator[i] === 'a') {
      counta++;
      myObject.a = counta;
      } else if (separator[i] === 'e') {
      counte++;
      myObject.e = counte;
      } else if (separator[i] === 'i') {
      counti++;
      myObject.i = counti;
      } else if (separator[i] === 'o') {
      myObject.o = counto;
      counto++;
      } else if (separator[i] === 'u') {
      myObject.u = countu;
      countu++;
    }
  }
  return myObject;
}

voweler(myString);