"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var person = { firstName: "Juana", lastName: "Ana" };
console.log(hello(person));
