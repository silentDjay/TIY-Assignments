function pluralizer(noun, number){
    if (number === 1){
        console.log(number + " " + noun);
    } else if (noun === "goose"){
        noun = "geese";
        console.log(number + " " + noun);
    } else if (noun === "sheep"){
        noun = "sheep";
        console.log(number + " " + noun);
    } else if (noun === "ox"){
        noun = "oxen";
        console.log(number + " " + noun);
    } else if (noun === "octopus"){
        noun = "octopi";
        console.log(number + " " + noun);
    } else if (noun.endsWith === "y"){
        noun = noun.push + "ies"; //don't quite know the syntax here :)
    } else {
        console.log(number + " " + noun + "s");
    }
}

pluralizer("robot", 6);
pluralizer("query", 4);
pluralizer("yodel", 1);
pluralizer("goose", 4);
pluralizer("ox", 1);
pluralizer("octopus", -34);
