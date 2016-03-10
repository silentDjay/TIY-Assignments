//take two strings of a single word, return a concatenation of the two, with the first two characters of each word swapped

function mixUp(word1, word2){
    var word1Array = word1.split("");
    var word2Array = word2.split("");
    var word1prefix = word1Array.slice(0,2);
    var word2prefix = word2Array.slice(0,2);
    word1Array.splice(0,2, word2prefix.join(""));
    word2Array.splice(0,2, word1prefix.join(""));
    console.log(word1Array.join("") + " "+ word2Array.join(""));
}

mixUp("Yellow", "Bulgur");
mixUp("hanky", "panky");
mixUp("Jellow", "Jigglers");
mixUp("umbrella", "Hamburger");
mixUp("Britches", "France");
mixUp("Thereby", "Heretofore");
mixUp("Crash", "Tan");
mixUp("Quiet", "Thunder");
