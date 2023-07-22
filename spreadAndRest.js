let person = {
  name: "Dummy",
  age: "20",
};

let personExtraDetails = {
  job: "private",
  city: "NYC",
};

let primaryHobbies = ["Cricket", "Chess"];
let secondaryHobbies = ["Painting", "Reading"];

console.log("----- Spread -------");
// using spread on object
let completePerson = { ...person, ...personExtraDetails };
console.log(completePerson);

// add all elements to arrays
let completeHobbies = [...primaryHobbies, ...secondaryHobbies];
console.log(completeHobbies);

// will assign numbers as keys (index) for array values.. will overwrite values if index overrides for different array
let spreadWithObjectAndArrays = {
  ...person,
  ...primaryHobbies,
  ...secondaryHobbies,
};
console.log(spreadWithObjectAndArrays);

console.log("----- Rest -------");
// rest parameter will put all other properties in an array
function showDetails(name, job, ...otherProperties) {
  console.log("Name : " + name);
  console.log("Job  : " + job);
  console.log("Remaining details : ");
  console.log(otherProperties);
}

showDetails(
  completePerson.name,
  completePerson.job,
  completePerson.city,
  completePerson.age,
  completeHobbies
);

// deal with variable number of parameters
function dealWithAnyNumberOfParams(...params) {
  params.forEach((param) => console.log(param));
}

dealWithAnyNumberOfParams(1, 2, "Hello");
dealWithAnyNumberOfParams(1, 2, { prop1: "prop1" }, [1, 2, 3, 5, 7, 11]);
