// Topics used in this file are: FS Package, JSON, JavaScript objects.

const fs = require("fs");

let persistentObject = null;

let filename = "persistentObject.json";

let doesFileExist = fs.existsSync(filename);

// If exists...
if(doesFileExist){
    let existingJSON = fs.readFileSync(filename);
    console.log(`Read file: ${existingJSON}`);

    persistentObject = JSON.parse(existingJSON);
    console.log(`Object converted from JSON:`);
} else {
    console.log("File does not exist, creating new file");
    fs.writeFileSync(filename, `{"numberslist": []}`, "utf8");
    persistentObject = {numbersList: []};
} 

// The following makes sure that we have something in the arguments to store.

let valueToAdd = process.argv[2];

if(valueToAdd === undefined){
    console.log("You need to provide a number after the filename to add to the list of numbers!");
    return;
} else if(isNaN(valueToAdd)){
    console.log("The value you provided is not a number!");
} else {

    valueToAdd = parseInt(valueToAdd);
    //Add the number provided in the terminal & push it into the array held by the Object.
    persistentObject.numbersList.push( valueToAdd );

    // Convert the persistentObject to a JSON string
    let data = JSON.stringify(persistentObject);

    //REPLACE the JSON file with 
    fs.writeFileSync(filename, data, "utf8");

    console.log(persistentObject);
}