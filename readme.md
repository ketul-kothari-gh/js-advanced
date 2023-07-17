# Syntax parser
Part of compiler or interpreter. Reads code and check for syntax validation.

# Lexical environment
Where something sits pysically in the code is it's lexical enviroment. There can be multiple lexical env - each block or function creates new lexical env.

# Execution context
JS engine creates EC that manages the code (in lexial env) that is currently running. There can be multilpe execution contexts:
    - Global execution context
    - Function execution context.

# Object
In JS - object is just collection of name value pairs.
const sample = {
    Name: "Dummy object",
    Address: {
        Flat: 90,
        Street: "Main"
    }

}

# Global execution context, Global object and this
When any js code is ran, it starts running in global execution context. Any code not part of function runs in global execution context. 
Global execution context creates - Global object and this.
In case if Js is running in browser, Global object is Window. this refers to Window.
In Node Js running on server, Global object is different.

Any global variable or declaration (code not inside function), is available through Global object.

# Excution context phases
Creation phase - 
1. global object and this created
2. Reference to outer environment (based on where is the code sitting physically ex: function created at global level when exeuted -- it's exectuion context's outer env. reference will point to global env.)
3. Hositing - check code and setup memory for functions and variables in the managed lexical env (aka hoisting). For variables values are not yet loaded -- undefined. 

Execution phase - 
1. Starts executing JS line by line. Loads variable values when encountered.

# Function execution context
1. Everytime a function is called a new function execution context is created and pushed to stack
2. This execution context also follows creation phase and execution phase
3. Execution contexts are stacked with first one to be pushed is Global execution context

# undefined
undefined is special value in JS (represented by keyword undefined) - which implies value is not yet set for the variable
All variables identified during create phase of execution context has undefined set in the memory

# Variable environment
Variable environment is where the variable is declared. Based on that - that variable is loaded in respective execution context.

# Scope and Scope Chain
In Scope means variable/method is available to be used.

Each execution context has outer Execution context reference created in creation phase based on it's lexical position in the code. This is not based out from where the function is invoked rather where the function sits in the code.

While searching for variable engine will check the scope chain based recursively until either the reference is found or chain end is reached i.e. when hitting outer reference of Global EC.

# ES6 let, const vs var
1. let and const support block scope, var does not.
2. let and const are also hoisted (Engine will setup memory for variables, function in EC creation phase before actual execution.) but Engine does not allow accessing let and const variables before declaration the way it allows var.
3. let and const does not allow redeclaring variables.

JS supports three scopes:
Block scope
Function scope
Global scope

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
Variables with same name defined at global scope in JS files referenced in html will override each other based on order of JS files.
