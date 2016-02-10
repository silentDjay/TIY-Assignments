// Create an array of objects, where each object describes a book and has
//  properties for the title (a string), author (a string), and alreadyRead
//   (a boolean indicating if you read it yet). Iterate through the array of
//   books. For each book, log the book title and book author like so:
//   "The Hobbit by J.R.R. Tolkien".
//
// Now use an if/else statement to change the output depending on whether
//  you read it yet or not. If you read it, log a string like
//  'You already read "The Hobbit" by J.R.R. Tolkien', and if not,
//  log a string like 'You still need to read "The Lord of the
//  Rings" by J.R.R. Tolkien.'

var bookList = [{a: "The Stinky Cheese Man and Other Fairly Stupid Tales", b: "by Jon Scieszka", c: "true"},
{a: "Master and Margarita", b:"by Mikhail Bulgakov", c:"false"},
{a: "Dave Barry in Cyberspace", b: "by Dave Barry", c: "true"},
{a: "Cryptonomicon", b:"by Neal Stephenson", c: "false"},
{a: "The Life and Opinions of Tristram Shandy, Gentleman", b:"by Laurence Sterne", c:"false"}
]

for (bookCounter = 0; bookCounter < bookList.length; bookCounter ++) {
  if (bookList[bookCounter].c === "true" ){
    console.log("You read " + bookList[bookCounter].a + " " + bookList[bookCounter].b + " a while back. It was okay.");
  }
  else {
    console.log("You STILL haven't read " + bookList[bookCounter].a +  " " + bookList[bookCounter].b + "!?!?!?!?");
  }
}
