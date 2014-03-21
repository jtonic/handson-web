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

var float = 1.0;
var float1 = .01;
var integer1 = 10;
var octal = 010;
var hexa = 0x100;
var str = "Antonel";
function getCar(carName) {
    return carName;
}
var obj = {
    name: "Antonel Pazargic",
    age: 44,
    getCar: getCar("Honda")
};
var arr = [1, 2, , 4, , 6]; // for code clarity use [1, 2, undefined, 4, undefined, 6]
var boo = false;
var multilineStr = "Antonel\n\
 este cel\n\
 mai\n\
 mare\n\
 smecher\n\
";

console.log("integer:" + integer1);
console.log("float: " + float);
console.log("float1: " + float1);
console.log("octal: " + octal);
console.log("hexa: " + hexa);
console.log("str: " + str);
console.log("obj: " + obj);
console.log("arr: " + arr);
console.log("Boo: " + boo);
console.log("arr[2]: " + arr[2]);
console.log("obj.name: " + obj.name);
console.log("obj.getCar: " + obj.getCar);

console.log("Length of the str: ", str.length);
console.log("multilineStr: "+ multilineStr);

console.log("Infinity: " + Infinity);


console.log("=====================================================================");
console.log("The check for is not null or false. Version 1: arg1 !== null && arg1 !== false ");
console.log("=====================================================================");
var isNotNullOrFalse = function (arg1) {
    if(arg1 !== null && arg1 !== false) {
      return "The arg1 '" + arg1 + "' is not null and not false.";
  } else {
      return "The arg1 '" + arg1 + "' is null or false.";
  }
};

console.log("isNotNullOrFalse(false): " + isNotNullOrFalse(false));
console.log("isNotNullOrFalse(null): " + isNotNullOrFalse(null));
console.log("isNotNullOrFalse(undefined): " + isNotNullOrFalse(undefined));
console.log("isNotNullOrFalse(0): " + isNotNullOrFalse(0));
console.log("isNotNullOrFalse(NaN): " + isNotNullOrFalse(NaN));
console.log("isNotNullOrFalse(''): " + isNotNullOrFalse(""));
console.log("isNotNullOrFalse('aaa'): " + isNotNullOrFalse("aaa"));

console.log("=====================================================================");
console.log("The check for is not null or false. Version 2: arg1");
console.log("=====================================================================");
isNotNullOrFalse = function (arg1) {
  if(arg1) {
      return "The arg1 '" + arg1 + "' is not null and not false.";
  } else {
      return "The arg1 '" + arg1 + "' is null or false.";
  }
};

console.log("isNotNullOrFalse(false): " + isNotNullOrFalse(false));
console.log("isNotNullOrFalse(null): " + isNotNullOrFalse(null));
console.log("isNotNullOrFalse(undefined): " + isNotNullOrFalse(undefined));
console.log("isNotNullOrFalse(0): " + isNotNullOrFalse(0));
console.log("isNotNullOrFalse(NaN): " + isNotNullOrFalse(NaN));
console.log("isNotNullOrFalse(''): " + isNotNullOrFalse(""));
console.log("isNotNullOrFalse('aaa'): " + isNotNullOrFalse("aaa"));
console.log("isNotNullOrFalse([]): " + isNotNullOrFalse([]));
console.log("isNotNullOrFalse([][0]): " + isNotNullOrFalse([][0]));

console.log("=====================================================================");
console.log("The check for is not null or false. Version 3: arg1 !== null && arg1");
console.log("=====================================================================");
isNotNullOrFalse = function (arg1) {
  if(arg1 !== null && arg1) {
      return "The arg1 '" + arg1 + "' is not null and not false";
  } else {
      return "The arg1 '" + arg1 + "' is null or false.";
  }
};

console.log("isNotNullOrFalse(false): " + isNotNullOrFalse(false));
console.log("isNotNullOrFalse(null): " + isNotNullOrFalse(null));
console.log("isNotNullOrFalse({}): " + isNotNullOrFalse({}));
console.log("isNotNullOrFalse(''): " + isNotNullOrFalse(""));
console.log("isNotNullOrFalse('aaaa'): " + isNotNullOrFalse("aaaa"));
console.log("isNotNullOrFalse([]): " + isNotNullOrFalse([]));
console.log("isNotNullOrFalse([][0]): " + isNotNullOrFalse([][0]));
