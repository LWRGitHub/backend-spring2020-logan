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
};

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

    // Save data to file
    let converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");

    //Building object to send back
    let datatToSend = {
        saveStatus: 0
    }

    
   
    response.send(datatToSend);
    response.sendStatus(500)

});

//Route to update a specific note.

//Route for deleting a spacific note.
app.post("/deleteNote", (req, res) => {
    let noteToDelete = req.body;

    //combin the create data number and author to create a unique "id"
    let noteID = noteToDelete.crreate_data + noteToDelete.author;

    for(let i = 0; i < data.notes.lenght; i++){
        let currentNote = data.notes[i];
        let currentNoteID = curentNote.create_date + currentNote.author;

        if(noteID === currentNoteID){
            data.notes.splice(i, 1);

            let datatToSend = {
                deletStatus: 0
            }

            res.send(datatToSend)

            return;
            //break; // stops the whole loop.
        } else {
            continue; // goals to the next loop.
        }

        let datatToSend = {
            deletStatus: 1
        }

        res.send(datatToSend);
    }

});

//Route for markinga note complete.

//Route for reading all notes.
app.post("/readNotes", (req, res) => {
    res.send(data);
});

