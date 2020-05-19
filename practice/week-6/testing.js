const myLibrary = require("./myLibrary");

myLibrary.mathify(40, 10);

myLibrary.cool();

console.log(myLibrary.countString("This is a string"));

let myArray = [10, 100, 14, 15, 679];
let myNumber = 101;

let indexNumber = myLibrary.find(myArray, myNumber);

console.log(myArray);
console.log(indexNumber);

console.log(myLibrary.realPI);

myLibrary.cool(); 

console.log(myLibrary.password);