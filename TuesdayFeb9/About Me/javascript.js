var bodyWorks = document.querySelector('body');

bodyWorks.style.fontFamily = '"Arial Black", Gadget, sans-serif';

var fullName = document.querySelector("#fullname");
var homeTown = document.querySelector("#hometown");
var filmReel = document.querySelector("#movie");
var foodStuff = document.querySelector("#food");

fullName.textContent = "Jeremy Martin Smith";
homeTown.textContent = "Kalamazoo, Michigan";
filmReel.textContent = "Wet Hot American Summer";
foodStuff.textContent = "Gruyere cheese";

var listMember = document.getElementsByTagName("li");

for (var myCounter = 0; myCounter < listMember.length; myCounter++){
  console.log(listMember);
  listMember[myCounter].className = "listitem";
  listMember[myCounter].style= "color:red";
}

// add an image to your page
