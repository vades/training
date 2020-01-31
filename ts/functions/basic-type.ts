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
 * Object
 */
let typeObject = {
    key1: 'Scalar', // Scalar value
    key2: ['val1', 'val2', 'val3'], // Array value
    key3: { id: 25, name: 'John'}, // Object value
    key4: function(){ } // Function value
};
typeObject.key4 = function(){
    return 'I am ' + typeObject.key1;
};
console.log('Object:', typeObject);
console.log('Object scalar:', typeObject.key1);
console.log('Object array:', typeObject.key2);
console.log('Object object:', typeObject.key3);
console.log('Object function:', typeObject.key4());

interface IPoint { 
    x:number 
    y:number 
 } 
 function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
 } 
 
 //Valid 
 var newPoint = addPoints({x:3,y:4},{x:5,y:1})  
 
 //Error 
 //var newPoint2 = addPoints({x:1},{x:4,y:3})
 //console.log(newPoint2);
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
enum animalsNum {Dog, Cat, Horse};
let a: animalsNum = animalsNum.Dog;
//type.setIsEnumNumber(Animal);
console.log('Numeric enum:', a);

enum animalsString {
    Dog = 'DOG', 
    Cat = 'CAT', 
    Horse = 'HORSE'
    };

console.log('Numeric enum:', animalsString.Dog);

enum AnimalsMix {
    Dog = 'DOG', 
    Cat = 1, 
    Horse
    };

console.log('Numeric mix:', AnimalsMix.Dog);
console.log('Numeric mix:', AnimalsMix.Cat);
console.log('Numeric mix:', AnimalsMix.Horse);

/**
 * Any
 */

let anyVar: any = 10;
anyVar = true;
anyVar = 'This is a string';

console.log('Any:', anyVar);

/**
 * Void
 */
function logMe(): void {
    console.log('This is a log message');
}
console.log('Void:', logMe());

/**
 * Never
 */
function error(message: string): never {
    throw new Error(message);
}

//console.log('Never:',  error('This is a error message'));
