var myFirstVar = true;
var myVar;

myFirstVar = null;

console.log(myVar);
console.log(myFirstVar);

//let const
let myRealFirstVar = true;

const MYFIRSTCONST = "cannotbechange";
MYFIRSTCONST = "NEWVALUE";

//if stament
if (myFirstVar) {}

//loop 
while(false){

}

for(var counter = 0; conter < 10; counter = counter +1){

}

// do while loop
do { } while(false);

//object
var myObj = {
    my: "my var for the key",
    "my2": "my var 2"
}

// function
function myFunctio(myVar, myFirstVar){
    console.log(myVar);
    console.log(myFirstVar);

}

console.log(myVar);