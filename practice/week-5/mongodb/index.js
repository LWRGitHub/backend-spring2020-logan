//Tells Node we want to use the Mongoose package
const mongoose = require("mongoose");

//string that hods the url to contect the mongoDB server. This should be unique to your own MongoDB server. When copied from website, make sure to replace <password> with actual password.
const dbUrl = "mongodb+srv://mongooseUser:mongooseUserPassword@cluster0-2f9xj.mongodb.net/test?retryWrites=true&w=majority";

const dbSettings = {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, dbSettings, (error) =>{
    if(error){
        console.log("Something bad happened!");
        console.log(error);
    } else {
        console.log("Successfully condetcted to the Database!");
    }
});