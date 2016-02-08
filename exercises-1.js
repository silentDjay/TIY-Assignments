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



// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()
