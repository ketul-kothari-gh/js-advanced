# Syntax parser
Part of compiler or interpreter. Reads code and check for syntax validation.

# Lexical environment
Where something sits pysically in the code is it's lexical enviroment. There can be multiple lexical env - each block or function creates new lexical env.

# Execution context
JS engine creates EC that manages the code (in lexial env) that is currently running. There can be multilpe execution contexts:
    - Global execution context
    - Function execution context.

# Global execution context, Global object and this
When any js code is ran, it starts running in global execution context. Any code not part of function runs in global execution context. 
Global execution context creates - Global object (and more -- details below)
In case if Js is running in browser, Global object is Window. this refers to Window.
In Node Js running on server, Global object is different.

Any global variable or declaration (code not inside function), is available through Global object.

# Excution context phases
Creation phase - 
1. this reference created
    Global execution context: this points to global
    Function execution context: what this will point to depends on how function is executed
2. If it is global execution context - then global object is also created. 
3. Reference to outer environment (based on where is the code sitting physically ex: function created at global level when exeuted -- it's exectuion context's outer env. reference will point to global env.)
4. Variable environment - JS allocates memory to functions and variables based on lexical postion. Performs hoisting.
    Hositing - check code and setup memory for functions and variables declared in the managed lexical env (aka hoisting). For variables values are not yet loaded -- undefined.
5. arguments - only in case of function exectuion context. Represent parameters. An Array like structure but not array. Supports index, length etc but not all array features.

Execution phase - 
1. Starts executing JS line by line. Loads variable values when encountered.

# Function execution context
1. Everytime a function is called a new function execution context is created and pushed to stack
2. This execution context also follows creation phase and execution phase
3. Execution contexts are stacked with first one to be pushed is Global execution context

# undefined
undefined is special value in JS (represented by keyword undefined) - which implies value is not yet set for the variable
All variables identified during create phase of execution context has undefined set in the memory

# Scope and Scope Chain
In Scope means variable/method is available to be used.

Each execution context has outer Execution context reference created in creation phase based on it's lexical position in the code. This is not based out from where the function is invoked rather where the function sits in the code.

While searching for variable engine will check the scope chain based recursively until either the reference is found or chain end is reached i.e. when hitting outer reference of Global EC.



# Single threaded
JS engine is single threaded and hence follows synchronous behavior.
Asynchronous callbacks are possible in javascript beacuse  they happend outside JS engine.
For ex: Browser deals with HTTP request, rendering engine deals with rendering. JS engine offloads task to the browser.

JS engine maintains event queue and monitors it. For ex., any http request passed to browser will be added to event queue. JS will continue with the current stack. Once it has emptied the stack i.e popped everything including global execution context then only it can pick executing the callback handler for the completed event if any (will load that callback handler context). If multiple events are completed they are handled one by one.

# Coercion and Eqaulity
JS supports Coercion in many case (i.e. implicit casting). ex: true when case as number is 1
true == 1; returns true and so on. This can release hard to find bugs.

JS provides strict equality and object.is (ES6)
true === 1; returns false
true !== 1; returns true
object.is(true, 1); returns false
Provides list of various use cases https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

# Referencing multiple files in html
Variables with the same name defined at global scope in multiple JS files referenced in html will override each other based on order referencing (script tag).

# Objects
In JS - object is just collection of name value pairs.
const sample = {
    Name: "Dummy object",
    Address: {
        Flat: 90,
        Street: "Main"
    }
}

# Function are Objects. 
1. Have two special properties - name and code (internal). When defining function - we create object and assign value to these two properties. code property can be invoked using ().
2. Can create custom properties on functions.
3. Can pass as argument, use as return value in functions.

Javascript does not support function overloading (as function are first class objects).
JS does not enforce sending all parameters, end parameters if not given are treated as undefined. (because of hoisting)
JS also does not support named parameters. But similar functionality can be achieved using Object destructuring.
JS allows default values for parameters. 

# Function statement and Function expressions
Expression - unit of code that do some work and return value
ex: test === "dummy", test = "Test" --> returns value --> true/fase, Test 
Statement - unit of code that do some work
if (test === "dummy") {} --> if is statement that contains expression -- does not return value

function statement --> function show() { ... }
function expression --> let showVar = function() { ... } // creates function object, returns and assign to showVar variable

Function expressions are not hoisted. Only variable will. Cannot call it before declaration.

BigArrow functions are not exactly same as function. It is ES 6 feature and there are some core differences.

# Pass by value and Pass by reference
All primitive types except string (Boolean, Number etc) are passed by value.
All objects (including special objects --- functions, arrays ) and string are passed by reference.
string in JS are immutable, os even though strings are passed by reference - any operation to change them within the called method will result in creating new string and the passed string variable will remain as it is.

# this
Everytime a execution context is created (Global or function EC), this reference is created.
In case of Global EC - this points to global object.
In case of Function EC - 
    If function is on global context - this refers to global.
    If function is on direclty on object (or function) - this refers to the object
    *** Special case *** If a function is created inside another function attached to object, this points to globalObject.

bind, call and apply can be used to set this reference for function.
bind is useful in currying - passing value for some of the parameters and creating new function that just requires remaining parameters.
can be used in function borrowing - that is using function from some object that are not defined on the concerned object.

# IIFE - Immediately invoked function expression
Inovkes function immediately from where it is declared
IIFE creates a separation and do not pollute global object. Very useful when using multiple script files. (libraries)

let and const creates block level variable.

# Closures
Closures are applicable when outer function returns inner function that can be invoked later.
In such cases, though outer function has finished execution and its EC is popped off the stack,
inner function when executed can still access outer function's local variable/ parameters.
JS Engine creates closure which is combination of inner function and variable environment of lexical outer function.
Closures are often used in:
1. async functionality
2. module pattern - encapsulating data using functions
3. singleton in JS
4. Used heavily in libraries and frameworks to implement above mentioned and others

*** Closures are not supported in a lot of OOPS programming languages but is common in functional programming languges ***

# Inheritance
JS follows prototypal inheritance and not classical (used by C#, Java etc).
In prototypal inheritance - each object has special property that refers to it's parent known as prototype.
When searching for property/method on object, JS first searches on object, if not found search on its prototype and so on.

Apart from primitve types, everything is an object.
custom object, array, function
function -> Empty function is its prototype -> this defines method like call, bind etc
Array -> Empty array is its prototype - defines various methods like index, map etc





# ES 6 
# ES6 let, const vs var
1. let and const support block scope, var does not. function creates function scope variable.
2. let and const are also hoisted (Engine will setup memory for variables, function in EC creation phase before actual execution.) but Engine does not allow accessing let and const variables before declaration the way it allows var.
3. let and const does not allow redeclaring variables.


JS supports three scopes:
Block scope (introduced in ES 6)
Function scope
Global scope