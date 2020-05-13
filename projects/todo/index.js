const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const http = require("http").Server(app);
const port = 3000;
http.listen(port);

console.log("Express is running on port: " + port);
// Finished Express server setup.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const filename = "./users/default_user.json";
let data = {
    "notes": []
};

if (fs.existsSync(filename)){
    const read = fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
} else {
    const converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}

class Note {
    constructor(note, author){
        this.note = note;
        this.author = author;
        this.completed_status = false;
        this.create_date = Date.now();
    }
}

app.use("/", express.static("public_html/"));


app.post("/newNote", (request, response) =>{
    let recievedData = request.body;
    let newNoteObject = new Note(recievedData.note, recievedData.author);

    data.notes.push(newNoteObject);
    // data.notes.push(new Note(request.body.note, request.body.author));

    let converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");

    let dataToSend = {
        saveStatus: 0
    };

    response.send(dataToSend);

});


app.post("/deleteNote", (req, res) =>{
    let noteToDelete = req.body;

    // Combine the create date number and author to create a unique "id".
    let noteID = noteToDelete.create_date + noteToDelete.author;

    for (let i = 0; i < data.notes.length; i++){
        let currentNote = data.notes[i];
        let currentNoteID = currentNote.create_date + currentNote.author;

        if (noteID === currentNoteID){
            data.notes.splice(i, 1);

            let converted = JSON.stringify(data);
            fs.writeFileSync(filename, converted, "utf8");

            let dataToSend = {
                deleteStatus: 0
            };

            res.send(dataToSend);

            return; 
        } else {
            continue; // goes to the next loop.
        }
    }

    let dataToSend = {
        deleteStatus: 1
    };

    res.send(dataToSend);

});


app.post("/updateNote", (req, res) =>{
    let noteToUpdate = req.body;

    const noteToUpdateID = req.body.create_date + req.body.author;
    console.log(noteToUpdate);

    for (let i = 0; i < data.notes.length; i++){
        let currentNote = data.notes[i];
        console.log(i + ": " + currentNote, data.notes[i]);
        const currentNoteID = currentNote.create_date + currentNote.author;

        if (noteToUpdateID === currentNoteID){
            currentNote.note = noteToUpdate.updated_note;

            const converted = JSON.stringify(data);
            fs.writeFileSync(filename, converted, "utf8");

            const dataToSend = {
                updatedStatus: 0
            };
            
            res.send(dataToSend);

            return;
        } else {
            continue;
        }
    }

    const dataToSend = {
        updateStatus: 1
    };

    res.send(dataToSend);

});

app.post("/readNotes", (req, res) => {
    res.send(data);
});


app.post("/markComplete", (req, res) => {
    let noteToComplete = req.body;

    // Combine the create date number and author to create a unique "id".
    let noteID = noteToComplete.create_date + noteToComplete.author;

    for (let i = 0; i < data.notes.length; i++) {
        let currentNote = data.notes[i];
        let currentNoteID = currentNote.create_date + currentNote.author;

        if (noteID === currentNoteID) {
            data.notes[i].completed_status = true;

            let converted = JSON.stringify(data);
            fs.writeFileSync(filename, converted, "utf8");

            let dataToSend = {
                markedComplete: 0
            };

            res.send(dataToSend);

            return; 
        } else {
            continue;
        }
    }

    let dataToSend = {
        markedComplete: 1
    };

    res.send(dataToSend);

});