// .sort()
// sorts the elements of an array based on Unicode conventions

var unsortedArray = ["John", "Jim", "Steve", "hank", 18, 8, 1, 1090, 0, -3, .4];

console.log(unsortedArray.sort());
returns [ -3, 0, 0.4, 1, 1090, 18, 8, 'Jim', 'John', 'Steve', 'hank' ]
// In Unicode, numbers come before upper case letters, which come before lower case letters. Cool!

// .concat()
// combines multiple arrays together into a new, massive array

var unsortedArray = [2, 6, 4, 73, 92, 1929, 0, -1],
coolArray = ["John", "Jim", "Steve", "hank", 18, 8, 1, 1090, 0, -3, .4];

console.log(unsortedArray.concat(coolArray));
returns [ 2, 6, 4, 73, 92, 1929, 0, -1, 'John', 'Jim', 'Steve', 'hank', 18, 8, 1, 1090, 0, -3, 0.4 ]

// .indexOf()
// returns the (0-based) position of the arg in the array

var unsortedArray = [2, 6, 4, 73, 92, 1929, 0, -1],
coolArray = ["John", "Jim", "Steve", "hank", 18, 8, 1, 1090, 0, -3, .4];

console.log(unsortedArray.indexOf(6), coolArray.indexOf("Steve"));
returns 1 2

// .split()
// takes a string and turns it into an array, using an optional arg to determine
// how to delimit the different elements of the new array

var sentence = "This, is a poorly written sentence but; I'm writing it this way anyway.";

console.log(sentence.split());
returns [ 'This, is a poorly written sentence but; I\'m writing it this way anyway.' ]

console.log(sentence.split(" "));
returns [ 'This,',
  'is',
  'a',
  'poorly',
  'written',
  'sentence',
  'but;',
  'I\'m',
  'writing',
  'it',
  'this',
  'way',
  'anyway.' ]

  console.log(sentence.split(",", 3));
  returns [ 'This', ' is a poorly written sentence but; I\'m writing it this way anyway.' ]
// This method has two possible parameters, both of which are optional. The first
// is the separator you want to designate to split the array objects, and the second
// is the limit of number of array objects you want to create

// .join()

var toBeJoined = ["I", "love", "computer", "science", 1, 2, 3];
console.log(toBeJoined.join(), toBeJoined.join("@"));

returns I,love,computer,science,1,2,3 I@love@computer@science@1@2@3

// The one optional parameter for this method is the separator character
// you want to use between the array objects when making it a string
// typically, this would be a space

// .pop()
// removes the last element in an array and returns that element; changes the length of the array

var doges = ["Mr.", "Blue", "Sky", "Birmingham", 8, "Howler"];

console.log(doges.pop());
returns Howler

// .shift()
// removes the first element in an array and returns that element; changes the length of the array

var doges = ["Mr.", "Blue", "Sky", "Birmingham", 8, "Howler"];

console.log(doges.shift());
returns Mr.

// .unshift()
// adds an element (provided as an arg) to the beginning of an array and returns the new length

var doges = ["Mr.", "Blue", "Sky", "Birmingham", 8, "Howler"];

console.log(doges.unshift());
returns 6

console.log(doges.unshift(4));
returns 7
//and then:
console.log(doges);
returns [ 4, 'Mr.', 'Blue', 'Sky', 'Birmingham', 8, 'Howler' ]

// .push()
// adds one or more elements to an array and returns the new length of the array

var doges = ["Mr.", "Blue", "Sky", "Birmingham", 8, "Howler"];

console.log(doges.push());
returns 6 //without passing a parameter, this method simply returns the array's length

console.log(doges.push("Rottweiler", "Shi-tzu", "Schnauzer"));
returns 9

// .slice()
// returns components of an array listed after and before provided args
// .slice(beginning index, ending index)

var doges = ["Mr.", "Blue", "Sky", "Birmingham", 8, "Howler"];

console.log(doges.slice(0,2));
returns [ 'Mr.', 'Blue' ]

console.log(doges.slice(3));
returns [ 'Birmingham', 8, 'Howler' ]

// .splice()
// changes the content of an array by removing existing elements and/or adding new elements
// array.splice(start, deleteCount[, item1[, item2[, ...]]])

var goodness = ["good", "news", "is", 7, 3, 2, 9, "no", "news"];
console.log(goodness.splice(1));

returns [ 'news', 'is', 7, 3, 2, 9, 'no', 'news' ]

// .filter()
// creates a new array with only those members that pass a certain function's test

function isBigOrString(thing) {
   return thing >= 100 || typeof thing === "string";
}
var doges = ["Mr.", 900, 10000, 23, 100, "Blue", "Sky", "Birmingham", 8, "Howler", "three hundred"];

console.log(doges.filter(isBigOrString));
[ 'Mr.', 900, 10000, 100, 'Blue', 'Sky', 'Birmingham', 'Howler', 'three hundred' ]

// .map()
//creates a new array of results of calling a function with each array member as an argument

function isSmallOrString(thing) {
   return thing <= 40 || typeof thing === "string";
}
var doges = ["Mr.", 900, 10000, 23, 100, "Blue", "Sky", "Birmingham", 8, "Howler", "three hundred"];

console.log(doges.map(isSmallOrString));
returns [ true, false, false, true, false, true, true, true, true, true, true ]
