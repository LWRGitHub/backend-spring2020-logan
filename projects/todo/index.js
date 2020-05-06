// Setting up Express server.
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);

console.log("Express is running on port: " + port);
// Finished Express server setup.

// Setting up body-arser with Express.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Finished connecting body-parser with express.

// Setting up out save file.
const filename = "./users/default_user.json";
let data = {
    "notes": []
}

if (fs.existsSync(filename)){
    const read = fs.readFileSync( filename, "utf8");
    data = JSON.parse(read);
} else {
    const converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}
//Finished setting up save file.

//Class definition for notes

class Note{
    constructor(note, author){
        this.note = note;
        this.author = author;
        this.completed_status = false;
        this.create_date = Date.now();
    }
}

//End class defintion for notes

//Todo Routes
app.use("/", express.static("public_html/"));

app.post("/newNote", (request, response) => {
    let recivedData = request.body;

    let newNoteObject = new Note(recivedData.note, recivedData.author);

    data.notes.push(newNoteObject);
    // data.notes.push(new Note(request.body.note, request.body.author));

    let datatToSend = {
        saveStatus: 0
    }

    response.sendDate(datatToSend);

});