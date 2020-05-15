const mongoose = require('mongoose');

const dbURL = "mongodb+srv://todoScriptUser:todoScriptUserPassword@cluster0-ym85n.mongodb.net/todoScript?retryWrites=true&w=majority";

const dbOptions ={
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

mongoose.connect(dbURL, dbOptions, (error) =>{
    if(error){
        console.log("ERROR", error);
    } else{
        console.log("Success!");
    }
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB Error: "));

let Schema = mongoose.Schema;

let noteSchema = new Schema({
    note: String,
    completed_status: Boolean 
});

let noteModel = new mongoose.model("notes", noteSchema);

//Finished Mongo

// Detect the third argument, possible options: new, edit, delete, list
if (process.argv[2] === "list") {
    listNotes();
} else if (process.argv[2] === "new") {

    if(process.argv[2] === undefined){
        console.log("Error: no text for note!");
        return;
    } 
    
    let newNote = {
        note: process.argv[3],
        completed_status: false
    }

    newNote = new noteModel(newNote);
    newNote.save((error) =>{
        if(error){
            console.log("There was an issue saving that note!", error);
        } else {
            console.log("Note ws successfully saved!")
            db.close();
        }
    });

} else if (process.argv[2] === "edit") {

    let noteIndex = checkIndex(procces.argv[3]);

    if(process.argv[4] === undefined){
        console.log("Error: not text for note!");
        return;
    }

    data.notes[noteIndex].note = process.argv[4];
    action("Updated Note!");

} else if (process.argv[2] === "delete") {

    let noteIndex = checkIndex(process.argv[3]);

    data.notes.splice(noteIndex, 1);
    action("Note Deleted successfully. =.(");

} else if (process.argv[2] === "done") {

    data.notes[checkIndex(process.argv[3])].completed_status = true;
    action("Note marked as completed! =)");

} else {
    console.log(`
Welcome to my ToDo Script! The followings commands can be typed after "node todo.js":

1) new: Creates a new note, the argument after should be the note text.
2) edit: edits an existing note, the argument after edit should be the note number, and after that the note text.
3) delete: deletes an existing note, the argument after delete should be the note number.
4) done: marks an existing note as done, the argument after done should be the note number.`);
}



function checkIndex(noteNumber){
    if(isNaN(noteNumber)){
        return "Please enter a number not a string!";
    }else{
        let index = parseInt(noteNumber - 1);
    }
   
    if(index > data.notes.length){
        console.log(`Notes ${index + 1} does not exist!`);
        return process.exit(1);
    } else {
        return index;
    }
}

function action(message){
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log(message);
    listNotes();
}

function listNotes() {

    noteModel.find({}, (error, results) =>{

        for (let i = 0; i < results.length; i++) {
    
            let status = results[i].completed_status ? " COMPLETED": "";
    
            console.log(`Note ${i + 1}: ${results[i].note}` + status);
        }
        db.close();
    });
}