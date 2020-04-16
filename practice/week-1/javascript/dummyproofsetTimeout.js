// first argument is what to run, second value is how long to wait for in milliseconds.

function dpSetTimeout(instruc, timeoutLength){
    
    if(typeof instruc === "function" && typeof timeoutLength === "number"){
        setTimeout(instruc, timeoutLength)
    }

}

function mySpecialFunc(){
    console.log("running something here");
}

dpSetTimeout(mySpecialFunc, 2000);


console.log("The script has finished!")