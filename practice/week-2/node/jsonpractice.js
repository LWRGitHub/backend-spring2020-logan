// JSON: JavaScript Object Notation. before JSON, we had XML.

let myObject ={
    "myName": "Eduardo",
    "myJob": "sleep",
    "favFood": "burrito",
    myFunction: function () {console.log("Hello!")}
};
// let converted = myObject.toString();
//console.log(converted);

// Converts a JavaScript object to a string in the format of JSON.
JSON.stringify();

let converted = JSON.toString(myObject);

//console.log(typeof converted);

//We write our JSON string to a file.
console.log("Saving object to file!");
fs.writeFileSync("saveData.json", converted, "utf8");
console.log("Finished.");

// We read our JSON from a file.
let content = fs.readFileSync("saveData.json", "utf8");
console.log(typeof contents);

let anObjectAgain = JSON.parse(contents);
console.log(anObjectAgain);