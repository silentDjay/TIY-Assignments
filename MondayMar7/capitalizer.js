function LetterCapitalize(str) {
    var newStr = str.split(" ");
    // console.log(newStr);

    for (var i=0; i < newStr.length; i++){
        newStr[i] = newStr[i].split("");
        console.log(newStr);

    }

    for (var i=0; i < newStr.length; i++){
        newStr[i][0] = newStr[i][0].toUpperCase();
        newStr[i] = newStr[i].join("")
    }
    // newStr[0] = newStr[0].toUpperCase();
    console.log(newStr);
    newStr = newStr.join(" ");
    console.log(newStr);
}

LetterCapitalize("pony tony mony");
