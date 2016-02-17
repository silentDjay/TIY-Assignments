function helloWorld (lang) {
    if (lang === "de"){
        return "Guten Tag, Welt";
    } else if (lang === "es"){
        return "Hola, Mundo";
    } else if (lang === "fr"){
        return "Bonjour, Monde"
    } else if (lang === "it"){
        return "Ciao, Mundo";
    } else if (lang === "en"){
        return "Hello, World";
    } else {
        return "That's not a langauge we recognize, but Hello, World!";
    }
}

console.log(helloWorld("fr"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));
console.log(helloWorld("es"));
console.log(helloWorld("it"));
console.log(helloWorld("be"));
