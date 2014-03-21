/**
 * Created by jtonic on 21.03.2014.
 */
console.log("=====================================================================");
console.log("basics.js");
console.log("=====================================================================");

console.log("=====================================================================");
console.log("Converters");
console.log("=====================================================================");
var a = parseInt("10");
var b = parseFloat("10.2");

console.log("Sum: " + (a + b));
a = parseInt("10.2");
console.log(a);

a = parseInt("10.6");
console.log(a);

console.log("=====================================================================");
console.log("Undefined - a variable without a value or un-initialize variable");
console.log("=====================================================================");
var c; // undefined value
console.log("The value of c: " + c);
if (!c) {
    console.log("The undedined value resolved as false in a logic context");
}

var myArray = [];
if (!myArray) {
    console.log("Empty array resolved as false in a logic context.");
} else {
    console.log("Empty array resolved as true in a logic context.");
}

if (!myArray[0]) {
    console.log("Referencing a non existed array element is resolved as false in a logic context.");
}

myArray.push(1);
if (myArray[0]) {
    console.log("Referencing an existed array element is resolved as true in a logic context.");
}

console.log("=====================================================================");
console.log("Undefined is converted to NaN in numeric context.");
console.log("=====================================================================");
var num;
console.log("10 + undefined  = " + (10 + num));
console.log("=====================================================================");

console.log("When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts.");
console.log("=====================================================================");
num = null;
console.log("10 + null  = " + (10 + num));

if (!num) {
    console.log("Null variable is converted to false in logic context");
}

console.log("=====================================================================");
console.log("Constants");
console.log("=====================================================================");
const prefix = "pro";
console.log("Constant prefix = " + prefix);

console.log("=====================================================================");
console.log("Global variables. They are in fact properties of the global object. window is such as global object");
console.log("Window global variable are referenced as window.variableName");
console.log("=====================================================================");
window.firstName = "Antonel";
window.middleName = "Ernest";
window.lastName = "Pazargic";
console.log("My name: " + window.firstName + " " + window.middleName + " " + window.lastName);

console.log("=====================================================================");
console.log("Literals");
console.log("=====================================================================");



