var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here
function last() {
	return threeItems[threeItems.length - 1];
}

alert(last());
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

function removeOdd(array) {
	for(var i = array.length; i > -1; i--) {
		if(array[i] % 2 !== 0) {
			array.splice([i], 1);
		}
	}
	return array;
}

removeOdd(evenArray);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

function match(array) {
	var randnum = getRandomArbitrary();
	for(var i = 0; i < array.length; i++){
		if(randnum === array[i]) {
			return alert(true);
		} else {
		}
	}
	return alert(false);
}

match(randomArray);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

  //code here
second = first.slice(0, 5);
second.push(6, 7);
alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here
function longest(str) {
	var array = str.split(" ");
	var longestWord = 0;
	var word;
	for(var i = 0; i < array.length; i++) {
		if(array[i].length > longestWord) {
			longestWord = array[i].length;
			word = array[i];
		}
	}
	return word;
}

longest(sentence);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'

//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here
function capitalize(str) {
	var array = str.split(' ');
	var cap;
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		cap = array[i].charAt(0).toUpperCase() + array[i].substr(1);
        newArray.push(cap);
	}
	return newArray.join(" ");
}

capitalize(myPoem);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(str) {
	var separate = str.split("");
	var count = 0;
	var notVowels = 0;
	for(var i = 0; i < separate.length; i++) {
		if(separate[i] === 'a') {
			count++;
		} else if(separate[i] === 'a') {
			count++;
		} else if(separate[i] === 'e') {
			count++;
		} else if(separate[i] === 'i') {
			count++;
		} else if(separate[i] === 'o') {
			count++;
		} else if(separate[i] === 'u') {
			count++;
		} else {
		    notVowels++;
		}
	}
	console.log("Number of Vowels:", count);
	console.log("Number of Consenants:", notVowels);
}

vowelCounter(theOdyssey);


