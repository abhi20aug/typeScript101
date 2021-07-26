"use strict";
var isDog = true;
var dogAge = 5;
var dogName = "doggy";
var dogNames = ['tuffy', 'fluffy', 'rocky'];
var dogAges = [1, 3, 5];
var someUnknown = "unknown stuff";
var unknownArray = [4, "any", true];
console.log("isDog" + isDog);
console.log("dogAge" + dogAge);
console.log("dogName" + dogName);
console.log("dogNames" + dogNames);
console.log("someUnknown" + someUnknown);
console.log("unknownArray" + unknownArray);
function doStuff() {
    console.log("doing stuff...");
    console.log("isDog" + isDog);
    console.log("dogAge" + dogAge);
    console.log("dogName" + dogName);
}
doStuff();
//never
function throwsError(message) {
    throw new Error(message);
}
//throwsError("test error");
// enum
var errorCodes;
(function (errorCodes) {
    errorCodes[errorCodes["OUT_OF_MEMORY"] = 3313] = "OUT_OF_MEMORY";
    errorCodes[errorCodes["NO_FILE"] = 41] = "NO_FILE";
    errorCodes[errorCodes["NO_DATA"] = 511] = "NO_DATA";
})(errorCodes || (errorCodes = {}));
var errorCode = errorCodes.OUT_OF_MEMORY;
console.log(errorCode);
// tuple
var tuple = ["abhishek", 15, true];
console.log(tuple[0]);
console.log(tuple[1]);
console.log(tuple[2]);
function getNameAge() {
    return ["abhishek", 20];
}
getNameAge();
console.log("name " + getNameAge()[0]);
console.log("age " + getNameAge()[1]);
function getAny() {
    return ["abhishek", 20];
}
getAny();
console.log("any name " + getAny()[0]);
console.log("any age " + getAny()[1]);
