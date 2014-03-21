/**
 * Created by jtonic on 21.03.2014.
 */

console.log("=====================================================================");
console.log("values_variables_and_literals.js");
console.log("=====================================================================");

// data type conversions
console.log("Data type conversions");
console.log("=====================================================================");
var answer = 42;
console.log("answer: " + answer);

answer = "Correct";
console.log("answer: " + answer);

// In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings.
var x = "The answer is " + 10;
console.log(x);

var y = 10 + " is the correct answer";
console.log(y);

// In statements involving other operators numeric values are not converted to string
var z = "37" - 7;
console.log(z);
z = "30" + 7;
console.log(z);

