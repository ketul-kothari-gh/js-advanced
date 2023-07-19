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
person.showDetails = () => { console.log(person) }
person.showDetails();

// KS does not have namespaces .. can use object as namespaces (container to avoid name collision) 
let english = { greet : "Hello" }
let spanish = { greet : "Hello" }


console.log("-------------- object <--> JSON -----------------")
// stringify do not include methods .. just properties
let jsonPerson = JSON.stringify(person);
let employee = JSON.parse('{ "Name": "Dummy", "Age":25, "Hobbies": ["Cricket", "Chess"] }')
console.log(jsonPerson);
console.log(employee);


console.log("-------------- Function are Objects -----------------")
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
const [firstElement, secondElement] = [1,2];
console.log(firstElement + "  " + secondElement);

