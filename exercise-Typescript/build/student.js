"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
// create class
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        var _this = this;
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.getFullName = function () {
            return _this.fullName;
        };
        this.getFirstAndLastName = function () {
            return _this.firstName + " " + _this.lastName;
        };
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
exports.Student = Student;
