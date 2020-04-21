const fs = require("fs");

let objectToSave = {
    key1: "Some key",
    isTrue: false,
    someFunction: function() {console.log("hello");},
    totalAmount: 100900
}

let jsonObj = JSON.stringify(objectToSave);

fs.writeFileSync("jsonFile.json", jsonObj, "utf8");


fs.readFileSync();