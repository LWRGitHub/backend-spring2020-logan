// Setting up Express server.
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);

console.log("Express is running on port: " + port);
//Finished Express server setup.

// Setting up body-arser with Express.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//Finished connecting body-parser with express.

//Setting up out save file.
const filename = "./users/defaoult_user.json";
let data = {
    "notes": []
}

if(fs.existsSync(+ filename)){
    const read = fs.readFileSync( filename, "utf8");
    data = JSON.parse(read);
} else {
    const converted = JSON.stringify(data);
    fs.writeFileSync(filenaem, converted, "utf8");
}
//Finished setting up save file.
