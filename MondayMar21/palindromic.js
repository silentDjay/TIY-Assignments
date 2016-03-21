// find the largest palindromic number made from the product of two 3-digit numbers

function palindrome(){
  var largestPal = 0;
  for (x = 999; x > 99; x--){
    for (y = 999; y > 99; y--){
      var palindromeProd = (x*y).toString();
      var palArray = palindromeProd.split("");
      // console.log(palindromeProd);
      var revProd = palArray.reverse().join("");
      if (palindromeProd === revProd){
        //   console.log(x*y);
        //   console.log("x is "+ x + " and y is "+ y);
        if ((x*y) > largestPal){
          largestPal = x*y;
        } else {
          //
        }
      }else{
      //
    }
  }
}
return largestPal;
}

palindrome();
