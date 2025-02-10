export {}
function greetPerson(name){
    if(name === 'chandler'){
        var greet = "hello chandler";
    }
    else{
        var greet = "hello ";
    }
    console.log(greet);
}
greetPerson('chandler');


let x =10;
const y =20;

//let x =23;  declared and used only once 
 
let sum ;  //can be declared earlier 

//const m; // cannot be declared without value
const m = '12';

let isBeginner : Boolean = true;
let total : number = 12;
let name : string = 'feerose';

let sentence : string = `My name is ${name} 
Im a beginer at type script`;
console.log(sentence);

let n : null = null;
let u : undefined = undefined;

//let isNew : boolean = null;
//let newName : string = undefined;

//array type 
let list1 : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];

//tuple for different types in an array 
//in tuple no of elements are fixed which should be assigned repectively to the declared order

let tup : [string , number] = ['feerose', 22];

// enum type 
enum Color {Red = 20 ,Green , Blue};
let c : Color = Color.Green;
console.log(c);

//any type
let randomValue : any = 10;
randomValue = true;
randomValue = 'green';

// let isVariable : any = 10;
// console.log(isVariable.name);

// isVariable();
// isVariable.toUpperCase();

// unknown type
// let isVariable : unknown = 10;
// function hasName(obj: any ): obj is {name:string}{
//     return !! obj &&
//     typeof obj === 'object' &&
//     'name' in obj
// }
// if(hasName(isVariable)){
//     console.log(isVariable.name);
// }

// (isVariable as string).toUpperCase();

//properties for assigning variables 
let a;
a=10;
a=true;

let b=2;
//b=true; cannot do this

let multiType: number | Boolean;
multiType = 10;
multiType = true;

let anyType: any;
anyType = 10;
anyType = true;

//undefined parameter
// function add(num1: number, num2?: number){
//     if(num2)
//         return num1 + num2;
//     else
//     return num1;
// }

//predefined/default parameter
function add(num1: number, num2: number= 20){
    if(num2)
        return num1 + num2;
    else
    return num1;
}
add(2,3);
//add('a', 3);
add(5);


//interfaces
// function fullName(person: {firstname: string, lastname:string}){
//     console.log(`${person.firstname} ${person.lastname}`);
// }
interface Person {
    firstname: string;
    lastname: string;
}
function fullName(person: Person){
    console.log(`${person.firstname} ${person.lastname}`);
}

let p ={
    firstname: 'Bruce',
    lastname : 'Wayne'
};

fullName(p);

//classes

class Employee {
    employeeName : string;

    constructor(Name: string){
        this.employeeName = Name;
    }

    greet(){
        console.log(`Hello, my name is ${this.employeeName}`);
    }
}

let emp1 = new Employee('wade');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);//super keyword to call base class constructor
    }

    delegateWork(){
        console.log(`Manager delegating the task`);
    }
}

let ma1 = new Manager('Bruce');
ma1.delegateWork();
ma1.greet();
console.log(ma1.employeeName);