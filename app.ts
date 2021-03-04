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

console.log(error('my first error message'));

