// first argument is what to run, second value is how long to wait for in milliseconds.

function dpSetTimeout(instructions, timeoutLength, count = 1, pause = 0) {

    if(instructions < 0){
        instructions = 0;
    }
    if(timeoutLength < 0){
        timeoutLength = 0;
    }
    if (count < 0){
        count = 0;
    }

    if (typeof instructions === "function" && typeof timeoutLength === "number") {

        for (let i = 0; i < count; i++) {

            let pauseLength = pause * i;

            setTimeout(instructions, timeoutLength + pauseLength);

        }

        return 0;
    } else {
        return 1;
    }
}

function mySpecialFunction() {
    console.log("running something here");
}

dpSetTimeout(mySpecialFunction, -2000, -6, -1000);


console.log("The script has finished!");