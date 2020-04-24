const fs = require('fs');
const filename = "notes.json";
let data = {
    "notes": []
};

/*
 example object structure.
{
    "notes": [
        {
         note: "Get Milk",
         completed_status: true
        },
        {
         note: "Get Pizza",
         create_date: 985430439584
        }
    ]
}

*/

if (fs.existsSync(filename)) {
    let read = fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
} else {
    let converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8");
}

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

    data.notes.push(newNote);
    action("Note successfully added!");

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
    for (let i = 0; i < data.notes.length; i++) {

        let currentNote = data.notes[i];
        // Ternary operator is like a 1 line if-statement. the first part is the condition, the second part is the value returned if true, the third part is the value returned if false. SYNTAX: condition ? true value : false value;
        let status = data.notes[i].completed_status ? " COMPLETED": "";

        /*
        if (data.notes[i].completed_status) {
            status = "COMPLETED";
        } else {
            status = "";
        }
        */

        console.log(`Note ${i + 1}: ${data.notes[i].note}` + status);
    }
}