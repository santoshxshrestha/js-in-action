const constant = "hello santosh";
// constant = "hello santosh";
console.log(constant)

console.log(typeof "true");
console.log(typeof  true );
console.log("true"==true)

console.log("----------------------------------")
const variable = "santosh";
const logger = () => {
    console.log(variable)
}
logger();


console.log("----------------------------------")

const global = "hello there";
function call() {
    const global = "hi there";
    console.log(global);
}
call();

console.log("----------------------------------")

function call() {
     another_global = "hi there";
    console.log(another_global);
}
call();
console.log(another_global);
