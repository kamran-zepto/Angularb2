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
//# sourceMappingURL=app.js.map