const myUsername = "User";
const myPassword = '123456';
const realPI = "3.14";
const notAccessible = 100;

function helperFunc(){
    console.log('helping!');
}


function mathify(num1, num2){
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 - num2);
    console.log(num1 + num2);
}

function reallyCoolFunction(){
    console.log("This really cool function ran!");
}

function countString(str){
    return str.length;
}

function find(array, item){

    if(Array.isArray(array) === false){
        return -1;
    }

    for(let i = 0; i < array.length; i++){
        if (array[i] === item){
            return i;
        }
    }
    
    array.push(item)
    return array.length - 1;
}

module.exports = {
    realPI,
    password: myPassword,
    username: myUsername,
    find: find,
    countString,
    mathify: mathify,
    cool: reallyCoolFunction
};