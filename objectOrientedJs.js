console.log("----- Prototypal inheritance ------");
let lifeForm = {
    message: function() {
        console.log("I am alive");
    }
}

let person = {
    firstName: "default",
    lastName: "default",
    fullName: function (){
        return this.firstName + " " + this.lastName;
    }
}

let employee = {
    firstName: "Dummy",
    age: 20
}

// for demo purpose .. has perofmance impact so shouldn't be done this way
person.__proto__ = lifeForm;
employee.__proto__ = person;
// full name is defined on person object, when JS won't find it on employee
// it will search property on it's prototype chain (different from scope chain)

// this in fullName method is using employee property value for firstName - as method is called on employee object
console.log(employee.fullName());
// find this employee --> person --> lifeForm
employee.message();



