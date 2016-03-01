//Find the sum of all the multiples of 3 or 5 below 1000.

sumNum = 0;
for (num = 0; num < 1000; num++) {
    if (num % 3 === 0){
        sumNum = sumNum + num;
    }
    else if (num % 5 === 0){
    sumNum = sumNum + num;
}
}
console.log(sumNum);
