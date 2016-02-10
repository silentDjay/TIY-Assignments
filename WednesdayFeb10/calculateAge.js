function calculateAge(birthYear, currentYear){
   var possibleAge1 = currentYear - birthYear;
   var possibleAge2 = possibleAge1 - 1;
   console.log("you are either " + possibleAge2 + " or " + possibleAge1 + ".")
}

calculateAge(2000, 2015);
calculateAge(1845, 1942);
calculateAge(2087, 3041);
