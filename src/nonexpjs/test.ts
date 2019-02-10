let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log("Sentence --> ", sentence);

let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]
// Enum in typescript -->
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let d: Color =  Color.Red;

function warnUser(): void {
    console.log("This is my warning message");
}
warnUser();

// function declare
function create(o: object | null): void{
    console.log("Object---> ", o);
};

create({ prop: 0 }); // OK
create(null); // OK

//create(42); // Error
//create("string"); // Error
//create(false); // Error
//create(undefined); // Error

function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns '11'


function f2() {
    console.log("starting execution of fn f");
    var a = 1;

    console.log("value of a is ", a);
    a = 2;

    console.log("value of a2 is ", a);

    var b = g();
    

    console.log("value of b is ", b);
    a = 3;


    console.log("value of a3 is ", a);

    return b;

    function g() {
        console.log("value of a inside in G is  ", a);

        return a;
    }
}
f2();

interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;

}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color:"Red"});
let mySquare2 = createSquare({ width: 100, opacity: 0.5, hdj:"sdsd",color:"UI" });

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
    [x: string]: Animal;
    [x: number]: Dog;
}

interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;

    constructor(h: number, m: number) { }
}


let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}


function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("Employee Name ...", employeeName);

