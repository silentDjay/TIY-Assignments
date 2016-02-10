// Changes the font family for the body of the HTML
var bodyWorks = document.querySelector("body");
bodyWorks.style.fontFamily = '"Arial Black", Gadget, sans-serif';

// creates variables representing html object IDs
var fullName = document.querySelector("#fullname");
var homeTown = document.querySelector("#hometown");
var filmReel = document.querySelector("#movie");
var foodStuff = document.querySelector("#food");

//adds text content to the objects based on the ID variables created above
fullName.textContent = "Jeremy Martin Smith";
homeTown.textContent = "Kalamazoo, Michigan";
filmReel.textContent = "Wet Hot American Summer";
foodStuff.textContent = "Gruyere cheese";

var listMember = document.getElementsByTagName("li"); //this creates an array, called ListMember of all of the "li"s

for (var myCounter = 0; myCounter < listMember.length; myCounter++){
  console.log(listMember);
  listMember[myCounter].className = "listitem";//changes the class of all listMember to listitem
  listMember[myCounter].style= "color:red";//changes the color of every listMember to red
}

//add an image to the page
var picturemy = document.createElement("img");
picturemy.src = "https://media.licdn.com/mpr/mpr/shrink_100_100/p/2/000/1d5/262/066889f.jpg";

var imageHost = document.querySelector("ul");
imageHost.appendChild(picturemy);
