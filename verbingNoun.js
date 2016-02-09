function verbing(noun){
    if (noun.endsWith("ing")){
        noun = noun + "ly";
    }
    else if (noun.length >= 3){
        noun = noun + "ing";
    }
    else {

    }
}

console.log(verbing("yellow"));

/**
the live code on this page returns 'undefined'
the code in the comment here runs, but it's buggy.

function verbing(noun){
    if (noun.length >= 3){
        return noun + "ing";
    }
    if (noun.endsWith("ing")){
        return noun + "ly";
    }
    else{
        return noun;
    }
}

console.log(verbing("yellow"));
**/
