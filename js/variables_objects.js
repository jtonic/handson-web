/**
 * User: jtonic
 * Date: 7/16/13
 * Time: 11:11 PM
 */

var name1 = 'Antonel Pazargic';
var age1 = 43;

console.log("name: " + name1);
console.log("age: " + age1);

var person = {
    name: "Antonel Pazargic",
    age: 43
}
var sayHello = function() {
    return "Say hello";
}

var sayHelloToYou = function(name, age) {
    return "Hello. My name is " + name + " and I am " + age + " years old";
}

var sayHelloWithContext = function() {
    return "Hello. My name is " + this.name + " and I am " + this.age + " years old";
}


console.log("person 1: " + person.name + ", " + person.age);
console.log("person 2: " + person['name'] + ", " + person['age']);

console.log(sayHello());

console.log(sayHelloToYou("Antonel", 43));

person.sayHello = sayHello;
person.doSomethingElse = sayHelloToYou;
person.doSomethingElseElse = sayHelloWithContext;

console.log(person.sayHello());
console.log(person.doSomethingElse("Antonel", 43));
console.log(person.doSomethingElseElse());

console.log(sayHelloWithContext.call(person));
//console.log(sayHelloWithContext()); //this throws an exception because default context (this) is window (or tab in nowadays)

var Point = function(x, y) {
    this.x = x;
    this.y = y;
}

var p1 = new Point(1, 1);
var p2 = new Point(2, 2);

console.log("Point 1: " + p1.x + ", " + p1.y);
console.log("Point 2: " + p2.x + ", " + p2.y);
