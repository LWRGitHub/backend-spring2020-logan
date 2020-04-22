// Topics used in this file are: FS Package, JSON, JavaScript objects.

const fs = require("fs");
let persistentObject = null;

let filename = "persistentObject.json";

let doesFileExist = fs.existsSync(filename);

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

persistentObject.numbersList.push( process.argv[2] );

let data = JSON.stringify(persistentObject);

fs.writeFileSync(filename, data, "utf8");

console.log(persistentObject);

