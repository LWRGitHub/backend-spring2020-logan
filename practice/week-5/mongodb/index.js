//Tells Node we want to use the Mongoose package
const mongoose = require("mongoose");

//string that hods the url to contect the mongoDB server. This should be unique to your own MongoDB server. When copied from website, make sure to replace <password> with actual password.
const dbUrl = "mongodb+srv://mongooseUser:mongooseUserPassword@cluster0-2f9xj.mongodb.net/test?retryWrites=true&w=majority";

//Mongoose settings
const dbSettings = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

//Making contact to server
mongoose.connect(dbUrl, dbSettings, (error) =>{
    if(error){
        console.log("Something bad happened!");
        console.log(error);
    } else {
        console.log("Successfully condetcted to the Database!");
    }
});

//refrence promise
mongoose.Promise = global.Promise;

//creating interface to db
let db = mongoose.connection;
db.on("error", console.error.bind(console, "ongoDB error: "));

let Schema = mongoose.Schema;

let practiceSchema = new Schema({
    "time": Number,
    "title": String,
    "status": Boolean
});

let practiceModel = new mongoose.model("mydocuments", practiceSchema);



/*
CRUD:
Create  practiceModel.save();
Read:   practiceModel.find();
Update: practiceModel.findByIdAndUpdate();
Delete: practiceModel.findByIdAndDelete();
*/


let myFirstDataToSave = new practiceModel({
    "time": 32904887290842,
    "title": "A random time.",
    "Status": true,
    "notallowed": "This in not allowed"
});

console.log("Saving Object to MongoDB.");
myFirstDataToSave.save();
console.log("Saved!");

let myImportantObject ={
    "time": Date.now()
};

myImportantObject = new practiceModel(myImportantObject);

myImportantObject.save();





practiceModel.find({}, (error, results) => {
    console.log(results);
});

//.find END

//.findByIDAndUpdate() START
practiceModel.findByIdAndUpdate("5ebd7eae1467da3cbf4ad6b7", {"status": false}, (error, results) =>{
    console.log(results);
});

//delete

practiceModel.findByIdAndDelete("5ebd7eae1467da3cbf4ad6b7", (error, results) =>{
    console.log(results);
});