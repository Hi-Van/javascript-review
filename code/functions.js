//declaring a function
function example() {
    //put javascript code here
}

//functions with input parameters
function add(num1, num2) {
    result = num1 + num2;
    return result;
}

//global scope variables, can be used anywhere in the code
var global = "this is a global variable";

function returnGlobal() {
    return global;
}

//local scope variables, can be used within the same functions
function returnLocals() {
    let local = "this is a local variable";
    var localTwo = "this is also a local variable";
    return local + localTwo;
}

//local and global variables can have the same names, local variables will take priority
var same = "global"

function returnSame() {
    let same = "local"
    return same;
}

//returning information from functions
function returnInfo() {
    let info = "return this information!";
    return info;
}

//setting variables to returned information
function makeNegative(num) {
    let neg = 0 - num;
    return neg;
}

let negativeInt = makeNegative(9);