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
function throwsError(message: string): never {
 throw new Error(message);
}

//throwsError("test error");

// enum
enum errorCodes {
    OUT_OF_MEMORY = 3313,
    NO_FILE = 41,
    NO_DATA = 511
}

let errorCode = errorCodes.OUT_OF_MEMORY;
console.log(errorCode)

// tuple
let tuple: [string, number, boolean] = ["abhishek", 15, true];
console.log(tuple[0])
console.log(tuple[1])
console.log(tuple[2])

function getNameAge(): [string, number]{
    return ["abhishek",20]
}

getNameAge();
console.log("name "+getNameAge()[0])
console.log("age "+getNameAge()[1])
