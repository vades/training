// tell typescript how to import it     
class  BasicType {
    // Module does Nothing , it simply tells about it's existence
}

// Export 
export { BasicType };

/**
 * Boolean
 */
let done: boolean;
done = true;
console.log('Boolean:', done);

/**
 * Number
 */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log('Number:',decimal);

/**
 * String
 */
let str: string = 'I`m a string';
let fullName: string = 'John Doe';
let age: number = 33;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 10 } years old next month.`;
console.log('String:', sentence);

/**
 * Array
 */
let arrayNumber1: number[] = [1, 2, 3];
let arrayNumber2: Array<number> = [1, 2, 3];

let arrayString1: string[] = ['one', 'two', 'three'];
let arrayString2: Array<string> = ['one', 'two', 'three'];

console.log('Array number:', arrayNumber1);
console.log('Array string:', arrayString2);

/**
 * Tuple
 */
let tupleOk: [string, number];
tupleOk = ['abc', 123];
let tupleError: [123, 'string']
console.log('Tuple:', tupleOk);

/**
 * Enum 
 */
enum Animal {Dog, Cat, Horse};
let a: Animal = Animal.Dog;
//type.setIsEnumNumber(Animal);
console.log('Enum numeric:', a);


