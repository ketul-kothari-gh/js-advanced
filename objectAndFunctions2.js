console.log("------ IIFE --------");
(function() {
    // this does not pollute global object
    let person = {
        Name: "Dummy",
        Age: 20
    }
    
    // stil can operate against global object
    globalThis.globalVariable = "Hello";
    console.log(`"${person.Name} ${person.Age}"`);
})();

console.log(globalVariable);

console.log("------ Closures -------");

function outerFunction(firstName) {
    let lastName = "LastName";
    return function() {
        // can access variables from outer function 
        console.log("Hello " + firstName + " " + lastName);
    }
}

// inner func still has access to outer func parameter/ vairable even when outer func has finished execution 
// Once outer func has finished execution it's execution context is popped off
// However, js engine will form closure which is combination of returned function and variable environment 
// of EC in which the returned function declaration is located lexically..
var innerFunc = outerFunction("Dummy");
innerFunc();



function returnFunctions(){
    var arr =[]

    // var creates function scope variable
    // after loops finsih executing three time - value of i is maintained as 3
    // all inner function refers to VE of outer function with single i = 3
    for (var i = 0; i < 3; i++){
        arr.push(function() {
            console.log(i);
        })
    }

    // let creates block scope variable and *** a new binding is created for each iteration [for impelmentation with let] ***
    // k for each inner function has different value - 10, 11, 12
    for (let j = 10; j<13; j++){
        arr.push(function(){
            console.log(j);
        })
    }

    // IIFE creates new execution context and maintains separate variable environment
    // JS engine will create closure for inner function with VE of different IIFE EC
    for (let j = 20; j<23; j++){
        arr.push(function(){
            console.log(j);
        })
    }
    return arr;
}

let functions = returnFunctions();
functions.forEach(func => func());


console.log("------ Closure use case --------");

// Here outer functions executes only once, this allows counter variable not getting reset every time
// when inner function is required
let clickUpdate = (function(){
    let counter = 0;
    return function(){
        ++counter;
        console.log(counter); 
    }
})();

// this can happen via button -- and clicking it multiple times to show output
clickUpdate();
clickUpdate();
clickUpdate();

// closures can be used to create private state - JS module pattern
// different from JS Modules that allows to break files
let privateStyle = function(dataPoint){
    let data = dataPoint; // this data should not be exposed outside directly 

    return {
        increaseData: () => data++,
        decreaseData: () => data--,
        showData: () => console.log(data)
    }
}

let privateHandler = privateStyle(30);
privateHandler.increaseData();
privateHandler.increaseData();
privateHandler.showData();

// Async functionality often use closures

function asyncClosure() {
    let message = "display";
    
    // setTimeout is async, could be http call as well.. will finish before setTimeout will invoked function
    // still anonymous function here will be able to access message
    setTimeout(() => console.log(message), 2000);
    console.log("Exit async Closure");
}

asyncClosure();

function getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(`${data} from ${url}`));
  }