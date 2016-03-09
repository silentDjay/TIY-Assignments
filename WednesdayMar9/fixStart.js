//replace all occurences of the string's first character (except its first character!!!) with *

function fixStart(str){
    var firstChar = str.charAt(0).toLowerCase();
    var strArray = str.split("");
    for (var i=1; i < strArray.length; i++){
        if (firstChar.includes(strArray[i])){
            strArray.splice(i,1, "*");
        }
    }

    console.log(strArray.join(""));
}

fixStart("flufferpuff");
fixStart("b");
fixStart("Nunneries");
fixStart("Mammals");
fixStart("North Carolina");
fixStart("New Jersey Turnpike");
