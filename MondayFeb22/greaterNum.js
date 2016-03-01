function greaterNum(num1, num2) {
     if (isNaN(num1) || isNaN(num2)){
      return "Please provide numbers!"
    } else if (num1 > num2) {
    return "The greater number of " + num1 + " and " + num2 + " is " + num1 + ".";
    } else if (num2 > num1) {
        return "The greater number of " + num1 + " and " + num2 + " is " + num2 + ".";
    } else {
        return "Your numbers are equal!";
    }
}

console.log(greaterNum(45, 89));
console.log(greaterNum(-13, 11));
console.log(greaterNum(.000000002, .000000001));
console.log(greaterNum(9, 9));
console.log(greaterNum("ponies", "yellow"));
