// find the largest palindromic number made from the product of two 3-digit numbers
// var x = 100;

for (x = 999; x > 99; x--){
  for (y = 999; y > 99; y--){
    var palindromeProd = x*y;
    palindromeProd.toString();
    console.log(palindromeProd);
    console.log(palindromeProd.reverse());
    if (palindromeProd % 2 === 0){
      console.log(x*y);
      break;
    }else{
      //
    }
  }
}

// function(num){
//     if (num ){//check if the number is
//         //
//     } else if ()
// }
