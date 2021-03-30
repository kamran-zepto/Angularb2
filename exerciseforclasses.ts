"use strict";
//Re-write all this code using TypeScript and Class Features.

 function Car(name : string) {
    this.name = name;
    this.acceleration = 0;
    this.honk = function () {
        console.log("Toooooooooot!");
    };
    this.accelerate = function (speed : number) {
        this.acceleration = this.acceleration + speed;
    };
}
var car = new Car ("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var baseObject = {
    width: 0,
    length: 0,
};
var rectangle = Object.create(baseObject);
rectangle.width  = 5;
rectangle.length = 2;
rectangle.calcSize = function (width: number , height : number) : number {
    return this.width * this.length;
};
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName" , {
    get: function () : string  {
        return this._firstName;
    },
    set: function (value   ) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person._firstName);
person._firstName = "Ma";
console.log(person._firstName);
person._firstName = "Maximilian";
console.log(person._firstName);
;
