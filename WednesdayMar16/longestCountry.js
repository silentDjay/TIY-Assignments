function landAmLaengsten(array){
    var lenArray = [];
    for (i=0; i < array.length; i++){
        console.log(array[i].length);
        lenArray.push(array[i].length);
    }
    console.log(lenArray);
}

landAmLaengsten(["Sweden", "Finland", "Thailand", "Djibouti", "Eritrea", "Paraguay", "New Zealand", "People's Rebublic of Korea", "The United Kingdom of Great Britain and Northern Ireland"]);
