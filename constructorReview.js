//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food; 
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
function person(name, age, height, gender) {
  var personObj = {
    name: name, 
    age: age, 
    height: height, 
    gender: gender
  };
  return personObj;
}

//Create a animal array and a person array.

  //code here
var animalArray = [];
var personArray = [];

//Create two instances of Animal and push those into your animal array

  //code here
var animal1 = new Animal("Canine", "Max", 3, "Brown", ["Dog Food", "People Food"]);
var animal2 = new Animal("Fowel", "Birdie", 2, "Green", ["Bird Seed", "Worms"]);
animalArray.push(animal1, animal2);

//Create two instances of person and push those into your person array.

  //code here
var person1 = new person("Alex", 28, "5'8", "Male");
var person2 = new person("Bob", 30, "6'0", "Male");
personArray.push(person1, person2);
//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
Animal.prototype.eat = function() {
  var index = Math.floor((Math.random() * this.food.length));
      console.log(this.name + " ate " + this.food[index]);
};

animal1.eat();

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
      // No, personArray is of the Object class, and is not given its own class.
      // As a result, we cannot run a prototype method on the personArray class. 


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
      A new object of that type is added.
  2) What's a good way to describe the keyword 'this'
      It refers to the current object being discussed or called.
  3) Can a normal function which creates an object and then returns that object use the prototype?
      No because the object created is under the object class and isn't given its own class.
  4) What happens if you forget to use 'new' when calling a constructor?
      It will run the constructor function but will not create a new object. 
*/