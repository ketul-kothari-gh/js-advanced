/* Don't run this file individually, should be referenced in HTML and run on browser
as it refers window - global object created by browser
*/

// global execution context - code not sitting inside any function
// global object -- window (browser) is created - this here refers to window
console.log(this === window);
console.log(window)

// prints undefined..  memory is setup for declaredLater (var) in creation phase of execution context
// so variable is available but value is not yet loaded as that happens in execution phase
// let and const do not support hoisting
console.log(declearedLater);
// function is loaded in memory during creation phase so can b invoked here during execution phase
definedLater();

// JS considers declarations for hoisting during creation phase
var declearedLater = 10;
function definedLater() {
    console.log("Hello!!!");
}

console.log("----------- Undefined vs Not defined --------------");

// this will throw - ReferenceError as declaredNoWhere is not declaread any where in the code
// console.log(declaredNoWhere);
console.log(declaredBelow);   // prints undefined
var declaredBelow = 10;       // value is assigned during exectuion phase of execution context
console.log(declaredBelow);   // prints 10 


// Function execution context - follows both created and executed phase
function TestExecutionContext(){
    console.log(localVarDeclaredBelow);  // does not throw Reference error as variable is already loaded in EC during creation phase but value is not assigned -- undefined
    var localVarDeclaredBelow = 10;   // value is assigned during exectuion phase
}
TestExecutionContext();




