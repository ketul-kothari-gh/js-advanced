let globalScopeVar = 30;

function DoSomethingTimeConsuming(){
    console.log("DoSomething Time consuming");
    // setTimeOut is asynchronous - should invoke method after 1s
    // however, the code in global ec will keep running for 3s
    // since JS is single thread, async method will run only once global execution context code is completed
    setTimeout(() => {console.log("Something big completed"); console.log( globalScopeVar )}, 1000);
}

console.log("Starting work");
DoSomethingTimeConsuming();
var fewSecondsLater = new Date().getTime() + 3000;
// Keep the code running so current execution context stack does not get empty
while(new Date().getTime() < fewSecondsLater) {
}

console.log('Finished work');