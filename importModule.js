// import default export - no {} is required
console.log("----- Default export -----");
import defualtExport from "./exportModule.js";
console.log(defualtExport);

// import named exported variables, functions
console.log("----- named exports -----");
import { personName, showDetails } from "./exportModule.js";
console.log(personName);
showDetails();

// import all exported variables, functions
console.log("----- import all exported -----");
import * as exported from "./exportModule.js";
console.log(exported.company.name);
exported.showDetails();
