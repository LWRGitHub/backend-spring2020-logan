
// function has only one parameter with the name of option.
function myFunction(option = 0, p2){

    if(option === 0){
        console.log("Everything is good!");
    } else if(option === 1){
        console.log("An error happened!");
    } else if ( option === -1){
        console.log("Everything is bad!")
    }

    console.log(option * p2);
}

myFunction(1,4);

