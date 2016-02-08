/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()

var unsortedArray = ["John", "Jim", "Steve", "hank", 18, 8, 1, 1090, 0, -3, .4];

console.log(unsortedArray.sort());
returns [ -3, 0, 0.4, 1, 1090, 18, 8, 'Jim', 'John', 'Steve', 'hank' ]
// In Unicode, numbers come before upper case letters, which come before lower case letters. Cool!

// .concat()

var unsortedArray = [2, 6, 4, 73, 92, 1929, 0, -1],
coolArray = ["John", "Jim", "Steve", "hank", 18, 8, 1, 1090, 0, -3, .4];

console.log(unsortedArray.concat(coolArray));
returns [ 2, 6, 4, 73, 92, 1929, 0, -1, 'John', 'Jim', 'Steve', 'hank', 18, 8, 1, 1090, 0, -3, 0.4 ]

// .indexOf()

var unsortedArray = [2, 6, 4, 73, 92, 1929, 0, -1],
coolArray = ["John", "Jim", "Steve", "hank", 18, 8, 1, 1090, 0, -3, .4];

console.log(unsortedArray.indexOf(6), coolArray.indexOf("Steve"));
returns 1 2

// .split()

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

// .push()

// .slice()

// .splice()

var goodness = ["good", "news", "is", 7, 3, 2, 9, "no", "news"];
console.log(goodness.splice(1));

returns [ 'news', 'is', 7, 3, 2, 9, 'no', 'news' ]

//array.splice(start, deleteCount[, item1[, item2[, ...]]])

// .shift()

// .unshift()

// .filter()

// .map()
