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



