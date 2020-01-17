import { BasicType } from "./basic-type";
/**
 *  Hadling basic types
 */
let type = new BasicType();
/**
 * Boolean
 */
type.setDone(true);
console.log('Boolean:', type.getDone());

/**
 * Number
 */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
type.setIsNumber(decimal);
console.log('Number:', type.getIsNumber());

/**
 * String
 */
let str: string = 'I`m a string';
let fullName: string = 'John Doe';
let age: number = 33;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 10 } years old next month.`;
type.setIsString(sentence);
console.log('String:', type.getIsString());

/**
 * Array
 */
let arrayNumber1: number[] = [1, 2, 3];
let arrayNumber2: Array<number> = [1, 2, 3];

let arrayString1: string[] = ['one', 'two', 'three'];
let arrayString2: Array<string> = ['one', 'two', 'three'];

type.setIsArrayNumber(arrayNumber1);
console.log('Array number:', type.getIsArrayNumber());

type.setIsArrayString(arrayString2);
console.log('Array string:', type.getIsArrayString());

/**
 * Tuple
 */
let tupleOk: [string, number];
tupleOk = ['abc', 123];
let tupleError: [123, 'string']
type.setIsTuple(tupleOk);
console.log('Tuple:', type.getIsTuple());

/**
 * Enum 
 */
enum Animal {Dog, Cat, Horse};
let a: Animal = Animal.Dog;
//type.setIsEnumNumber(Animal);
console.log('Enum numeric:', a);
