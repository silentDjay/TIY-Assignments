function notRepeat(str){
    var strArray = str.split("");
    for (var i=0; i< strArray.length ; i++){
            var compArray = strArray.splice(i,1);//create a new array with all but the character in question
            // console.log(compArray);
            // console.log(strArray.splice(i,1));
            if(compArray.includes(strArray[i])){// compare the character in question with the contents of the new array
                console.log(strArray[i] + " is duplicated");
                break;
            } else {
                console.log("no matches");
                // do nothing
            }
    }
}

notRepeat("hamburger");
notRepeat("cheeseburger");
notRepeat("nejsiwoslajs");
