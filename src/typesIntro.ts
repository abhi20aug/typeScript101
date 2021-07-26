let isDog: boolean = true;

let dogAge: number = 5;

let dogName: string = "doggy";

let dogNames: string[] = ['tuffy','fluffy','rocky']
let dogAges: number[] = [1,3,5];

let someUnknown: any = "unknown stuff";
let unknownArray:  any[]  =[4,"any",true]

console.log("isDog"+isDog)
console.log("dogAge"+dogAge)
console.log("dogName"+dogName)
console.log("dogNames"+dogNames)
console.log("someUnknown"+someUnknown)
console.log("unknownArray"+unknownArray)

function doStuff(): void {
    console.log("doing stuff...")
    console.log("isDog"+isDog)
    console.log("dogAge"+dogAge)
    console.log("dogName"+dogName)
}

doStuff();

//never
