const fs = require("fs");
const file = "practice.txt";

// Check if the file exists...
if(fs.existsSync(file)){
    console.log("File " + file + " was found!");

    // ... and read it. Store the contents into variable data.
    let data = fs.readFileSync(file, "utf8");

    console.log("The contentx of the file are: " + data);

} else {
    console.log("File " + file + " was not found! Redirecting Program...");

    console.log("Creating file with the name '" + file + "'")

    // ... otherwise create the "missing" file.
    fs.writeFileSync(file, "", "utf8");

    console.log("Finished createing file")

}

