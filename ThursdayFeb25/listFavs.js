var cars = ["oneCar", "twoCar", "redCar", "blueCar"];


    for (var i=0; i < cars.length; i++){
        if (i === 0){
            console.log ( "My favorite car is " + cars[i]);
        } else if (i === 1){
            console.log ("My " + (i + 1) + "nd favorite car is " + cars[i]);
        } else if (i === 2){
            console.log ("My " + (i + 1) + "rd favorite car is " + cars[i]);
        } else {
            console.log ("My " + (i + 1) + "th favorite car is " + cars[i]);
        }
    }    
