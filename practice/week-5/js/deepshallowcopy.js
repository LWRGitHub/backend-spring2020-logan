// Deep Copy
let variable1 = 100;

let veriable2 = variable1;

let variable3 = variabe2 + 10;
variable1 = 500;

console.log(variable1);
console.log(variable3);


// Shallow Copy, really means a new "reference" to "old" data.
let myObject = {
    info1: "something",
    info2: 1000
}

let myObject2 = myObject;

let myObject3 = myObject2;

myObject3.infor2 = 2000;

console.log(myObject.info2);