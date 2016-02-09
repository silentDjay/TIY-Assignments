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
