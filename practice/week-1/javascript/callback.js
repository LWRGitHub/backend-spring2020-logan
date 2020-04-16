// callbacks and functions

//defining a function
function functionName() {
    let text = "Hello there!";
    //on line 7, everything created in here is destroyed.
}

//calling a function ( mulitiple times )
functionName();
functionName();
functionName();

// return keyword
function anotherFucntion(){
    let number = 105;
    let text = "some other text";
    let otherTextToSurvive = "Very important!";
    return [otherTextToSurvive, text, number];
}

let myArr = anotherFucntion();
let results = ( 10 * myArr[2] ) + 100;

console.log(results);
//NaN
//undefined
//null
//0
//""
//false

// parameters and arguments

function argumentPractice(shouldIRun = 10){
    if(shouldIRun === 10){
        console.log("This Function ran.")
    }
}

argumentPractice(20);

// Arguments are provided in the parenthesis of the FUNCTION CALL.
argumentPractice(true);

console.log("hello");


// CALLBACKS

// $(document).ready( function () {} );

console.log();
Math.random();

function callBackReader(param){

    console.log("callBackReader has started");

    console.log("our only parameter was given the value: " + param);

    if(typeof parameter === "function"){
        console.log("The datatype is of this value is a function.");

        setTimeout(parameter(), 3000);

    } else{
        console.log("The parameter is holding something else, should only be a function.")
    }

    console.log("callBackReader has ended.");

}


callBackReader(function() {
    console.log("hello there!");
});

// typeof keyword, returns a string that describes the dattype of the item after it.
console.log(typeof "something");


//Testing arrays is a little special copared to the typeof keyword
console.log(Array.isArray(myArr));