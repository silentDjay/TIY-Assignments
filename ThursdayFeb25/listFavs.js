var cars = ["oneCar", "twoCar", "redCar", "blueCar"];

function listFavs(array) {
    for (var i=0; i < array.length; i++){
        console.log(array.length);
        if (i === 0){
            return "My favorite car is " + array[i];
        } else if (i === 1){
            return "My " + (i + 1) + "nd favorite car is " + array[i];
        } else if (i === 2){
            return "My " + (i + 1) + "rd favorite car is " + array[i];
        } else {
            return "My " + (i + 1) + "th favorite car is " + array[i];
        }
    }

}



console.log(listFavs(cars));
