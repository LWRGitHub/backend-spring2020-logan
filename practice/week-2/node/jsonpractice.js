const fs = require("fs");

let myObject = {
    myName: "Eduardo",
    myJob: "sleep",
    favFood: {
        food1: "burrito",
        food2: "pizza",
        food3: "sushi"
    },
};

//myObject.myFunction();

//let converted = myObject.toString();
//console.log(converted);

JSON.stringify();

let converted = JSON.stringify(myObject);

//console.log(typeof converted);

console.log("Saving object to file!");
fs.writeFileSync("savedData.json", converted, "utf8");
console.log("Finished.");

let contents = fs.readFileSync("savedData.json", "utf8");

let anObjectAgain = JSON.parse(contents);
console.log(anObjectAgain);