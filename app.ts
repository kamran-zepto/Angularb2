// Data Types

let myFirstString: string = 'hello';
let myFirstNumber: number = 123;
let myFirstboolean: boolean = true;
let myFirstStringArray: string[] = ['first', 'second'];
let myFirstNumberArray: number[] = [1, 2];
let myFirstTupple = ['firstString', 2];
enum Color {
    Gray,
    Green,
    blue = 100
};
let myColor: Color = Color.Green;
let myFirstAny  : any = 'hello';
myFirstAny = 123;
let myFirstUnion : number | boolean = true;
myFirstUnion = 123;
let myFirstNull : null = null;

function error(message : string) : never {
    throw new Error(message);
}

function returnMyName(name : string) : string {
    return name;
}

function dontReturnFunction(): void {
    myColor = Color.blue;
}

 function calculate (value1 : number, value2 : number) : number {
     return value1 + value2;
 }

 let newCalculation :(val1 : number, val2 : number) => number;
newCalculation = calculate;

let userData : {name :string, age: number} = {
    name : 'Kamran',
    age : 30,
}

type complexType = {data: number[], output : (all : boolean)=>number[]};

let complex1 : complexType = {
    data : [1,2,3],
    output :function (all : boolean):number[] {
        if(all) {
            return this.data;
        }
        else {
            return [1];
        }
       
    }
}

let complex2 : complexType ={
    data : [3,4,5],
    output :function (all : boolean):number[]{
        return this.data;
    }
}

// Simple calss 

class Person {
    MyName : string // by default its public 
    private Gender : string // you can not access this property directly outside of the class
    protected Age : number //its meets the definition of private and you can access this property in inherited class

    constructor(paramName : string, userName : string){
        this.MyName = paramName;
    }
    setGender(value: string){
        this.Gender = value;
    }
    getGender(){
        return this.Gender;
    }
    setAge(value: number){
        this.Age = value;
    }
    getAge(){
        return this.Age;
    }
}
const personObject = new Person('Max', 'Kamran');
personObject.setGender('Male');
personObject.setAge(23);
// console.log(personObject.getAge());

// Inheritence of class
class Max extends Person{
    myName : 'Max';
    constructor(userName : string){
        super('Max',userName);
    }
}

let newMax = new Max('Maxi');
newMax.setGender('Female');
// console.log(newMax.getGender())

// Getters and setters
// class Plant {
//     private _plantName:string = 'Deafult';

//     set plantName(value:string){
//         this._plantName =value;
//     }

//     get plantName(){
//         return this._plantName;
//     }
// }

// Static properties and methods
// You can access static properties and methods directly without initiating class

class Helper {
    static PI : number = 3.14;
    static calcCircumference(diameter : number):number{
        return this.PI*diameter;
    }
}

// console.log(Helper.calcCircumference(8))
// Abstract Classes

abstract class Project {
    projectName = "Default";
    budget = 10000;
    abstract changeName(name: string): void;
    calcBudget(value: number): number{
        return this.budget*value;
    }
}

class Itproject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }

}

let newProject = new Itproject();

//  console.log("newProject before change==",newProject)
//  newProject.changeName("Super IT Project");
//  console.log("newProject===",newProject)




// Private costructors singltones
class Onlyme{
    private static instance :Onlyme;
    public readonly name:string;
    private constructor(name:string){
        this.name = name;
    }

    static getInstance(){
        if(!Onlyme.instance){
            Onlyme.instance = new Onlyme('The only One');
        }
        return Onlyme.instance;
    }
}

let onlyMeInstance = Onlyme.getInstance();
// console.log(onlyMeInstance)

// Interface

interface NamePerson{
    firstName : string,
    age? : number, 
    [propName :string]:any,
    greet(lastName: string):void;
}

function greet(person : NamePerson){
    console.log('Hello ', person.firstName);
}

const person2 : NamePerson = {
    firstName : 'Max',
    lastName : 'Min',
    greet(lastName:string){
        console.log(lastName)
    }
}

// greet(person2);
// person2.greet('Anna');

// Interface with class

class Person3 implements NamePerson {
    firstName : string;
    age: number;
    lastName : string;
    greet(lastName : string){
        console.log('My name is ',lastName);
        console.log('My age is ', this.age);
    }
}

const myNewPerson = new Person3();
myNewPerson.firstName = 'John';
myNewPerson.lastName = 'Doe';
myNewPerson.age = 30;
// myNewPerson.greet('Max');
// greet(myNewPerson);

// Interface and functio type
interface DoubleValueFunc{
    (num1: number, num2: number): number
}

let myDoubleFunc : DoubleValueFunc;

myDoubleFunc = function(num1: number, num2: number){
    return num1*num2;
}

// console.log(myDoubleFunc(10,10))

// Interface and inheritance

interface Agedperson extends NamePerson{
    age: number;
    hobbies : string[];
}

const OldPerson : Agedperson ={
    age : 50,
    hobbies :['sports'],
    firstName: 'Max',
    greet(lastName : string){
        console.log(lastName);
    }
}
greet(OldPerson);
OldPerson.greet('Min');