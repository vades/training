Commands
==========
- Watch: `tsc -w`
- Using nodemon: `nodemon src/main.js`

Basic types
==========
## Boolean
```
let isDone: boolean = false;
```
## Number
```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```
## String
```
let str: string = 'I`m a string';
```
### Template strings
Can span multiple lines and have embedded expressions.
```
let fullName: string = 'John Doe';
let age: number = 33;
let sentence: string = `Hello, my name is ${ fullName }.
I'll be ${ age + 10 } years old next month.`;
```
## Array
Use the type of the elements followed by []
```
let arrayNumber1: number[] = [1, 2, 3];
let arrayString1: string[] = ['one', 'two', 'three'];
```
Use a generic array type, Array<elemType>:
```
let arrayNumber2: Array<number> = [1, 2, 3];
let arrayString1: string[] = ['one', 'two', 'three'];
```
## Tuple
These types allow you to express an array with a fixed number of elements.
```
let x: [string, number];
x = ["hello", 10]; // OK
x = [10, "hello"]; // Error
```
## Enum 
Enums allow us to declare a set of named constants.
### Numeric enum
Numeric enums store string values as numbers.
```
enum Animals {Dog, Cat, Horse};
let a: Animal = Animals.Dog;
console.log(a);
// Displays '0'
```
By default, enum values start from **0**. You also have the option to initialize the first numeric value yourself.
```
enum Animals {Dog = 1, Cat, Horse};
let a: Animal = Animals.Dog;
console.log(a);
// Displays '1'
```
### String enum
Enum values are initialized with string values
```
enum Animals {
    Dog = 'DOG', 
    Cat = 'CAT', 
    Horse = 'HORSE'
    };

console.log(Animals.Dog);
// Displays 'DOG'
```

### Heterogeneous enum


Links
==========
- [Documentation](https://www.typescriptlang.org/docs/home.html)
- [TypeScript tutorial](https://code.visualstudio.com/docs/typescript/typescript-tutorial)
- [Nodemon](https://www.npmjs.com/package/nodemon)