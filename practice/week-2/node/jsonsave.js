const fs = require("fs");

let objectToSave = {
    key1: "Some key",
    isTrue: false,
    someFunction: function() {console.log("hello");},
    totalAmount: 100900
}

//Convert to json and save fot file.
let jsonObj = JSON.stringify(objectToSave);
fs.writeFileSync("jsonFile.json", jsonObj, "utf8");
objectToSave = null;


//Read JSON and convert to JS Object.
let data = fs.readFileSync("jsonFile.json", "utf8");
let readObject = JSON.parse(data);
console.log(readObject.totalAmount, typeof readObject.totalAount);
console.log(readObject);