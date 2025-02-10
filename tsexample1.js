"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
function greetPerson(name) {
    if (name === 'chandler') {
        var greet = "hello chandler";
    }
    else {
        var greet = "hello ";
    }
    console.log(greet);
}
greetPerson('chandler');
var x = 10;
var y = 20;
//let x =23;  declared and used only once 
var sum; //can be declared earlier 
//const m; // cannot be declared without value
var m = '12';
var isBeginner = true;
var total = 12;
var name = 'feerose';
var sentence = "My name is ".concat(name, " \nIm a beginer at type script");
console.log(sentence);
var n = null;
var u = undefined;
//let isNew : boolean = null;
//let newName : string = undefined;
//array type 
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple for different types in an array 
//in tuple no of elements are fixed which should be assigned repectively to the declared order
var tup = ['feerose', 22];
// enum type 
var Color;
(function (Color) {
    Color[Color["Red"] = 20] = "Red";
    Color[Color["Green"] = 21] = "Green";
    Color[Color["Blue"] = 22] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//any type
var randomValue = 10;
randomValue = true;
randomValue = 'green';
// let isVariable : any = 10;
// console.log(isVariable.name);
// isVariable();
// isVariable.toUpperCase();
// unknown type
// let isVariable : unknown = 10;
// function hasName(obj: any ): obj is {name:string}{
//     return !! obj &&
//     typeof obj === 'object' &&
//     'name' in obj
// }
// if(hasName(isVariable)){
//     console.log(isVariable.name);
// }
// (isVariable as string).toUpperCase();
//properties for assigning variables 
var a;
a = 10;
a = true;
var b = 2;
//b=true; cannot do this
var multiType;
multiType = 10;
multiType = true;
var anyType;
anyType = 10;
anyType = true;
//undefined parameter
// function add(num1: number, num2?: number){
//     if(num2)
//         return num1 + num2;
//     else
//     return num1;
// }
//predefined/default parameter
function add(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(2, 3);
//add('a', 3);
add(5);
function fullName(person) {
    console.log("".concat(person.firstname, " ").concat(person.lastname));
}
var p = {
    firstname: 'Bruce',
    lastname: 'Wayne'
};
fullName(p);
//classes
var Employee = /** @class */ (function () {
    function Employee(Name) {
        this.employeeName = Name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('wade');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this; //super keyword to call base class constructor
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating the task");
    };
    return Manager;
}(Employee));
var ma1 = new Manager('Bruce');
ma1.delegateWork();
ma1.greet();
console.log(ma1.employeeName);
