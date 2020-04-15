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

argumentPractice(true);

console.log("hello");