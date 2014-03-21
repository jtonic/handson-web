/**
 * Created by jtonic on 21.03.2014.
 *
 * This file contains simple examples about the falsy boolean expressions: false, null, "", 0, undefined, NaN
 *
 */

var falsy = function() {
    var a = null;
    if(!a) {
        console.log("null is evaluated as false as logical condition")
    }
    if(!undefined) {
        console.log("undefined is evaluated as false as logical condition")
    }
    a = NaN;
    if(!a) {
        console.log("NaN is evaluated as false as logical condition")
    }
    a = 0;
    if(!a) {
        console.log("0 is evaluated as false as logical condition")
    }
    a = 0.0;
    if(!a) {
        console.log("0.0 is evaluated as false as logical condition")
    }
    a = "";
    if(!a) {
        console.log("empty string is evaluated as false as logical condition")
    }
    a = false;
    if(!a) {
        console.log("false is evaluated as false as logical condition")
    }
};

falsy();

var falsy1 = function(arg1) {
    if(!arg1) {
        console.log(arg1 + " argument is resolved as false");
    }
};

falsy1(null);
falsy1(false);

