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
console.log(personObject.getAge());

// Inheritence of class
class Max extends Person{
    myName : 'Max';
    constructor(userName : string){
        super('Max',userName);
    }
}

let newMax = new Max('Maxi');
newMax.setGender('Female');
console.log(newMax.getGender())