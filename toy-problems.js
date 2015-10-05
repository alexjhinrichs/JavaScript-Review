/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/
var arrayOfIntegers = [1, 2, 3, 4];

function sumOfIntegers(array) {
	var total = 0;
 for(var i = 0; i < array.length; i++) {
 	total += 1 + array[i];
 }
 return total;
}


/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/
var multDiArray = [1, 2, [3, [4], 5, 6], 7];


function flatten(array) {
    var joinArrays = array.join();
    var separate = joinArrays.split('');
    var newArray = [];
    for(var i = 0; i < separate.length; i++) {
        if(i % 2 === 0) {
            var toNumber = Number(separate[i]);
            newArray.push(toNumber);
        }
    }
    
    return newArray;
}

flatten(multDiArray);

/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
var givenArray = ['a1', 'a2', 'aN', 'b1', 'b2', 'bN', 'c1', 'c2', 'cN'];


function sortArray(array) {
    var As = [];
    var Bs = [];
    var Cs = [];
    for(var i = 0; i < array.length; i++) {
        if(array[i].charAt(0) === 'a') {
            As.push(array[i]);
        }
    }
    for(var i = 0; i < array.length; i++) {
        if(array[i].charAt(0) === 'b') {
            Bs.push(array[i]);
        }
    }
    for(var i = 0; i < array.length; i++) {
        if(array[i].charAt(0) === 'c') {
            Cs.push(array[i]);
        }
    }
    var order = [];
    for(i = 0; i < As.length; i++){
        order.push(As[i], Bs[i], Cs[i]);
    }
    return order;
}

sortArray(givenArray);

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/
var array1 = [1, 2, 3, 4, 5, 6, 7, 8];
var array2 = [7, 5, 2, 6, 1, 3, 4];

function compareArrays(arrayone, arraytwo) {
    var order = arraytwo.sort();
    for(var i = 0; i < arrayone.length; i++) {
        for(var j = 0; j < order.length; j++) {
            if(arrayone[i] !== order[j]) {
                var missingElement = arrayone[i];
            }
        }
    }
    console.log("the missing element in the second array is " + missingElement);
}

compareArrays(array1, array2);


/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/
var mySentence = "If I were the longest word in this sentence what word would I be?";

function longestWord(str) {
    var length = 0;
    var word;
    var splitWords = str.split(' ');
    var lWArray = [];
    for(var i = 0; i < splitWords.length; i++) {
        if(splitWords[i].length >= length) {
            length = splitWords[i].length;
        }
    }
    for(var j = 0; j < splitWords.length; j++) {
        if(splitWords[j].length === length) {
            word = splitWords[j];
            lWArray.push(word);
        }
    }
    return lWArray;
}

longestWord(mySentence);
/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
function multiples() {
    var count = 0;
    for(var i = 0; i <= 1000; i++)
        if(i % 3 === 0 || i % 5 === 0) {
            count += i;
        }
    return count;
}

multiples();

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/
var duplicateCharacters = "I wonder what this sentence will look like once I remover all the duplicate characters";


function noDuplicates(str) {
    var separator = str.split('');
    for(var i = separator.length; i > 0; i--) {
        if(separator.indexOf(separator[i]) !== i) {
            separator.splice(i, 1);
            }
        }
    return separator.join('');
} 



noDuplicates(duplicateCharacters);

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum(num1, num2) {
    if(!isNaN(num1) && !isNaN(num2)){
    return num1 + num2;
    } else {
        return function(num2) {
            return num1 + num2;
        };
    }
}

console.log(sum(2,3));
console.log(sum(2)(3));