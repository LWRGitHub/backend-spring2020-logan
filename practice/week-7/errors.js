var someVariable = 10;



try{
    throw "Something bad";
} catch(error) {
    console.log(`ERROR: ${error.name} ${error.message}`);
    //console.log(error.stack)
} finally {
    console.log("The attempt to read a variable is done!");
}

