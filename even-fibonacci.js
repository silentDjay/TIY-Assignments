var fibNacho = 1;
var prevNacho = 0;
var sumEvenNacho = 0;
var fibNachoKeep;
while (fibNacho <= 4000000) {
    if (fibNacho % 2 === 0){
        sumEvenNacho = sumEvenNacho + fibNacho;
        console.log(" prevNacho = " + prevNacho + " fibNacho = " + fibNacho + " sumEvenNacho = " + sumEvenNacho);
        //the previous line was simply to keep track of my variables as they iterated. It was VERY helpful.  
    }
    fibNachoKeep = fibNacho;
    fibNacho = fibNacho + prevNacho;
    prevNacho = fibNachoKeep;
}
console.log(sumEvenNacho);
