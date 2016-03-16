function landAmLaengsten(array){
    var longestName = "";
    for (i=0; i < array.length; i++){
        if (array[i].length > longestName.length){
            longestName = array[i];
        }
    }
    console.log(longestName);
}

landAmLaengsten(["Sweden", "Finland", "Thailand", "Djibouti", "Eritrea", "Paraguay", "New Zealand", "People's Rebublic of Korea", "The United Kingdom of Great Britain and Northern Ireland", "Honduras", "El Salvador"]);
