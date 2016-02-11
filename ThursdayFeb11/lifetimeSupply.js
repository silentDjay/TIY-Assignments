var maxAge = 89;
function calculateSupply(age, perDiem){
    var restAmount = ((maxAge - age) * 365) * perDiem;
    console.log("You're gonna need " + restAmount + " food units to last until the ripe old age of " + maxAge + ".");
}

calculateSupply(5, 20);
calculateSupply(80, 5);
calculateSupply(31, 8);
