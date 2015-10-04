/* Declare and Define the functions here that will make the function calls below work properly */

function first(array, cb) {
  cb(array[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function last(array, cb) {
  cb(array[array.length - 1]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.
function contains(name, array, cb) {
  for(var i = 0; i < array.length; i++) {
    if(name === array[i]) {
      return cb("yes");
    } else {
    }
  }
 return cb();
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */


function map(array, cb) {
  var newArray = array.slice(0, array.length);
  for(var i = 0; i < newArray.length; i++) {
  newArray[i] = cb(newArray[i]);
  }
  return newArray;
}

var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function uniq(array, cb) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length; j++) {
      if(array[i] === array[j] && i !== j) {
        array.splice(i, 1);
      }
    }
  }
  cb(array);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function each(array, cb) {
  for(var i = 0; i < array.length; i++) {
    cb(i, array[i]);
  }
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function getUserById(id, array, cb) {
  for(var i = 0; i < array.length; i++) {
    if(array[i].id === id) {
      cb(array[i]);
    }
  }
}

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

function find(array, cb) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
      cb(array[i]);
      break;
    }
  }
  return array[i];
}


//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 === 0; //should return 2
})
