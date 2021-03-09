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
var myFirstString = 'hello';
var myFirstNumber = 123;
var myFirstboolean = true;
var myFirstStringArray = ['first', 'second'];
var myFirstNumberArray = [1, 2];
var myFirstTupple = ['firstString', 2];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["blue"] = 100] = "blue";
})(Color || (Color = {}));
;
var myColor = Color.Green;
var myFirstAny = 'hello';
myFirstAny = 123;
var myFirstUnion = true;
myFirstUnion = 123;
var myFirstNull = null;
function error(message) {
    throw new Error(message);
}
function returnMyName(name) {
    return name;
}
function dontReturnFunction() {
    myColor = Color.blue;
}
function calculate(value1, value2) {
    return value1 + value2;
}
var newCalculation;
newCalculation = calculate;
var userData = {
    name: 'Kamran',
    age: 30
};
var complex1 = {
    data: [1, 2, 3],
    output: function (all) {
        if (all) {
            return this.data;
        }
        else {
            return [1];
        }
    }
};
var complex2 = {
    data: [3, 4, 5],
    output: function (all) {
        return this.data;
    }
};
var Person = (function () {
    function Person(paramName, userName) {
        this.MyName = paramName;
    }
    Person.prototype.setGender = function (value) {
        this.Gender = value;
    };
    Person.prototype.getGender = function () {
        return this.Gender;
    };
    Person.prototype.setAge = function (value) {
        this.Age = value;
    };
    Person.prototype.getAge = function () {
        return this.Age;
    };
    return Person;
}());
var personObject = new Person('Max', 'Kamran');
personObject.setGender('Male');
personObject.setAge(23);
console.log(personObject.getAge());
var Max = (function (_super) {
    __extends(Max, _super);
    function Max(userName) {
        return _super.call(this, 'Max', userName) || this;
    }
    return Max;
}(Person));
var newMax = new Max('Maxi');
newMax.setGender('Female');
console.log(newMax.getGender());
//# sourceMappingURL=app.js.map