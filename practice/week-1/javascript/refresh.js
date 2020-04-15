var myFirstVar = true;
var myVar;

myFirstVar = null;

console.log(myVar);
console.log(myFirstVar);

//let const
let myRealFirstVar = true;

const MYFIRSTCONST = "cannotbechange";
// NOT POSIBLE MYFIRSTCONST = "NEWVALUE";

//if stament
if (myFirstVar) {}

//loop 
while(false){

}

for(var counter = 0; counter < 10; counter = counter +1){

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

//console.log(myVar);

// camparitors, coparison symbols
// == vs =
//= is for assignment
// == copares both sides and create a boolean. If the same value, it becomes false

// 19 == 30

// === compares both sides for value and data type. if either of these are not the same it is false.

100 == "100";
console.log(10 == "10");

100 === "100";
console.log(10 === "10");

// < and >, if one value is larger that the other side, then it becomes true.

// <= >+, same as above but allows to be equal.
// <== >==, same as above but must be the same datatype. (not available in JS)
// != Should NOT be the same on both sides TO BE TRUE.
// !== same as above but must be the same datatype.

"t" < 10;
20 < 10;
74 < 10;

console.log("hello" !== "hello");
console.log("t" != 10);
console.log("t" != 74);
console.log("t" !== 10);
74 !== 10;

// Mathematical operators
// +
// -
// *
// /
// %

// 1 + 1, 1 - 1, 1*1, 1/1, 1%1;

// --
// ++

100--; // 99
100 - 1;

100++; // 101
100 + 1


// +=
// -=
// *=
// /=

var somethig = 10;

somethig += 10;
something = something + 10;

//Math.ceil(Math.random(Math.PI));

// Logical Operators.
// || && !

// ||
true || false;

// &&
true && true;
true && false;
!true // false
!false // true
!!false;

true && false && true; // false
true || false || true; // true

while(true || false) {}