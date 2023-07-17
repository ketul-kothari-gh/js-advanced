console.log("----------- Scope chain --------------");

function DoSomething() {
    // loaded in this function execution context
    var commonName = "DoSomething";
    console.log(commonName);
    // Accessing global object - window
    console.log(globalThis.commonName);
    DoSomethingExtra()
}

function DoSomethingExtra() {
    // loaded in this function execution context
    var commonName = "DoSomethingExtra"
    console.log(commonName);
    JustDoSomething();
}

function JustDoSomething(){
    // no commonName in this execution context ., fetching from outer environmnet which is global exectuion context
    // as this function is lexically sitting in global  
    console.log(commonName);
}

// this is loaded in global execution context
var commonName = "Global";
console.log(commonName);
DoSomething();

function OuterECDoSomething(){
    var commonName = "OuterECDoSomething";
    // local scope is preferred over outer scope
    console.log(commonName);

    // no commonName in this execution context ., fetching from outer environmnet which is Global exectuion context
    // as this function is lexically sitting in Global
    console.log(testCommonName);

    function InnerECDoSomehting() {
        // no commonName in this execution context ., fetching from outer environmnet which is OuterECDoSomething exectuion context
        // as this function is lexically sitting in OuterECDoSomething and not global  
        console.log(commonName);

        // testCommonName is not available in InnerECDoSomehting's EC
        // will check in outer EC which is OuterECDoSomething's EC.. wii not find there
        // will go further down the scope chain - OuterECDoSomething's outer EC is Global's EC
        // will find in Global's EC and show the value
        console.log(testCommonName);
    }
    InnerECDoSomehting();
}
console.log(commonName);
var testCommonName = "Global testCommonName";
console.log(testCommonName);
OuterECDoSomething();

console.log("----------- ES6 let, const and block scope --------------");

// Block does not create separate execution context
{
    // This is ok, var is hoisted and JS engine allows accesing it before declaration
    console.log(varButInsideBlock);
    // This is not ok, let & const are  also hoisted and but JS engine does not allow accesing it before declaration
    // console.log(letButInsideBlock);
    // console.log(constButInsideBlock);
    var varButInsideBlock = 10;
    let letButInsideBlock = 20;
    const constButInsideBlock = 30;

    // Redeclaration allowed
    var varButInsideBlock = 60;
    // below will throw error - Redeclarion not allowed withing in the same block
    // var letButInsideBlock = 70;
}
// This is ok because var do not support block scoping
console.log(varButInsideBlock);
// below statement will throw ReferenceError
// console.log(letButInsideBlock);
// console.log(constButInsideBlock);


// can declare here as let is block scoped - so it's not re-declaration as it is not visible here
let letButInsideBlock = 120;