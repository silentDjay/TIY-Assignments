var favMov = {
    title: "Wet Hot American Summer",
    duration: 100,
    stars: ["Coop", "Andy", "Debbie", "Jim Stansil"]
}

function filmReel () {
    console.log(favMov.title + " lasts for " + favMov.duration + " minutes. Stars: ");
    for (i = 0; i < favMov.stars.length; i++){
        if (i < (favMov.stars.length-1)){
        console.log(favMov.stars[i] + ", ");
        } else {
        console.log(favMov.stars[i] + ".");
        }
    }
}

filmReel();
