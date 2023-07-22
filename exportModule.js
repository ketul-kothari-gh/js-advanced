export let personName = "Dummy";
export let personAge = "20";
export let personCity = "NYC";

export function showDetails() {
  console.log(personName + " " + personAge + " " + personCity);
}

function doNotExport() {
  console.log("Don't export function");
}

export let company = {
  name: "DummyCompany",
};

// default export do not require name
export default "Default export - no name required";
