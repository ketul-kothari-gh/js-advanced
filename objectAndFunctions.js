console.log("------- Objects ---------");

// creating using new operator
var person = new Object();
person.Name = "Dummy";
person["Age"] = 20;
person["Address"] = new Object();
person["Address"]["Street"] = "Main";
person.Address.City = "NY";

// using object literal to create object
person.work = {
    Type: "Private",
    Designation: "Manager"
}

// adding method on object
person.showDetails = () => { console.log("Hello") }
person.showDetails();

// KS does not have namespaces .. can use object as namespaces (container to avoid name collision) 
let english = { greet : "Hello" }
let spanish = { greet : "Hello" }


console.log("-------------- object <--> JSON -----------------");
// stringify do not include methods .. just properties
let jsonPerson = JSON.stringify(person);
let employee = JSON.parse('{ "Name": "Dummy", "Age":25, "Hobbies": ["Cricket", "Chess"] }')
console.log(jsonPerson);
console.log(employee);


console.log("-------------- Function are Objects -----------------");
function simpleFunction() {
    console.log("Simple Function");
}

console.log(simpleFunction.name);
simpleFunction.PropertyOnFunctionObject = "Property On Function";
simpleFunction.AnotherFunctionOnFunction = () => {console.log("Another Function On Function")}
console.log(simpleFunction.PropertyOnFunctionObject);
simpleFunction.AnotherFunctionOnFunction();

// passing function as parameter
(function CallAnotherFunction(func) {
    console.log("Calling another function");
    func();
})(simpleFunction);


console.log("--------- Object Destructuring ----------");
const Display = ({Name, Age, Address }) => console.log(Name + " " + Age + " " + Address.City);
Display(person);


console.log("--------- Array Destructuring ----------");
// js is dynamic type so each element can be of different type
const [firstElement, secondElement, thirdElement] = [1,"second", () => console.log("Hello")];
console.log(firstElement + "  " + secondElement);
thirdElement();


console.log("--------- this - functions, objects ---------");
// this represents global object, in case of browser it's window
console.log(this === globalThis);

// Function statement and expression
// new exection context is created - this points to global Object even though function is an object
const thisFunction = function () {
    if(this === globalThis){
        console.log("this === globalThis");
    }
    else if (this === thisFunction){
        console.log("this === thisFunction");
    }
}
thisFunction();

var thisObj = new Object();
thisObj.Name = "Dummy";
thisObj.Show = function(){
    console.log("method attached directly to object");
    if(this === globalThis){
        console.log("this === globalThis");
    }
    else if (this === thisObj){
        console.log("this === thisObj");
        console.log(thisObj);
    }

    // special case - function inside function created on object
    function functionInsideFunctionOnObject(){
        console.log("*** function Inside method attached to Object");
        if(this === globalThis){ 
            console.log("this === globalThis");
        }
        else if (this === thisObj){
            console.log("this === thisObj");
            console.log(thisObj);
        }
    }

    functionInsideFunctionOnObject();   
}

// show pattern to safely use this reference inside object to always refer to the owner object 
thisObj.PatternShow = function() {
    let self = this;
    console.log(self.Name);

    // dealing with special case 
    function functionInsideFunctionOnObject(){
        console.log("*** function Inside method attached to Object");
        // this way can refer to the owner object
        if(self === globalThis){ 
            console.log("self === globalThis");
        }
        else if (self === thisObj){
            console.log("self === thisObj");
            console.log(thisObj);
        }
    }
    functionInsideFunctionOnObject();
}

thisObj.Show();
thisObj.PatternShow();


console.log("------- call, apply and bind -------")
// While executing a function, it is possible to set this explicitly
const explicitThis = {
    name: "Dummy",
    age: 20,
    city: "NY",
    show: function() {
        console.log(this.name + " " + this.age);
    }
}

function useExplicitThis(arg1, arg2){
    console.log(arg1 + " " + arg2);
    console.log(this.name + " " + this.age +  " " + this.city);
    this.show();
}

// this will throw error as in usExplicitThis this refers to global object by default
try{
    useExplicitThis("Hello", "Dummy");
}
catch(ex){
    console.log(ex);
}


// bind returns copy of function post updating it this reference
// so when function execution phase is created - this points to passed in object
let useExplicitThisCopy = useExplicitThis.bind(explicitThis);
useExplicitThisCopy("Hello", "Dummy");

// using call, does not create copy, calls function with this referring to explict object and passed params
useExplicitThis.call(explicitThis, "Hello", "Dummy");

// using apply, does not create copy, calls function with this referring to explict object and passing params as array
useExplicitThis.apply(explicitThis, ["Hello", "Dummy"]);



console.log("------ arguments -------");
function showArguments(firstName, lastName){
    // arguments is array like but not array
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments);
}
showArguments("Dummy", "DummyName");
