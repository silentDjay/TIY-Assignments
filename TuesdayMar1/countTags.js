// write a function that takes a certain type of tag and counts the number of elements with that tag
// this is assuming there is a page to analyze

function countTags(tag){
    // numTags = $(tag).length;
    numTags = document.querySelector(tag);
    numTags = numTags.length;
    return "There are " + numTags + " tags of type " + tag + " on the page.";
}

countTags("div");
