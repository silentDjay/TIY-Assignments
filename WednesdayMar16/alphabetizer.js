function alphabetizer(toOrder){
    var sortedArray = [];
    // var sortedArray = [toOrder.charAt(toOrder.length - 1)];
    console.log(sortedArray);
    var alphArray = toOrder.split("");
    console.log(alphArray[alphArray.length-1]);
    for (i=0; i < alphArray.length; i++){
        // for(I=0; I < alphArray.length; I++){
            if (alphArray[i] > alphArray[alphArray.length-1] ){
                sortedArray.push(alphArray[i]);
            } else{
                sortedArray.unshift(alphArray[i]);
            }
        // }
        console.log(sortedArray.join(""));
    }
}

alphabetizer("hammertime");
