let objectToSave = {
    key1: "Some key",
    isTrue: false,
    someFunction: function() {console.log("hello");},
    totalAmount: 100900
}

let converted = JSON.stringify(objectToSave);