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
console.log(error('my first error message'));
//# sourceMappingURL=app.js.map