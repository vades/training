"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tell typescript how to import it     
var BasicType = /** @class */ (function () {
    function BasicType() {
    }
    return BasicType;
}());
exports.BasicType = BasicType;
/**
 * Boolean
 */
var done;
done = true;
console.log('Boolean:', done);
/**
 * Number
 */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log('Number:', decimal);
/**
 * String
 */
var str = 'I`m a string';
var fullName = 'John Doe';
var age = 33;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 10) + " years old next month.";
console.log('String:', sentence);
/**
 * Array
 */
var arrayNumber1 = [1, 2, 3];
var arrayNumber2 = [1, 2, 3];
var arrayString1 = ['one', 'two', 'three'];
var arrayString2 = ['one', 'two', 'three'];
console.log('Array number:', arrayNumber1);
console.log('Array string:', arrayString2);
/**
 * Object
 */
var typeObject = {
    key1: 'Scalar',
    key2: ['val1', 'val2', 'val3'],
    key3: { id: 25, name: 'John' },
    key4: function () { } // Function value
};
typeObject.key4 = function () {
    return 'I am ' + typeObject.key1;
};
console.log('Object:', typeObject);
console.log('Object scalar:', typeObject.key1);
console.log('Object array:', typeObject.key2);
console.log('Object object:', typeObject.key3);
console.log('Object function:', typeObject.key4());
function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
//Valid 
var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 });
//Error 
//var newPoint2 = addPoints({x:1},{x:4,y:3})
//console.log(newPoint2);
/**
 * Tuple
 */
var tupleOk;
tupleOk = ['abc', 123];
var tupleError;
console.log('Tuple:', tupleOk);
/**
 * Enum
 */
var animalsNum;
(function (animalsNum) {
    animalsNum[animalsNum["Dog"] = 0] = "Dog";
    animalsNum[animalsNum["Cat"] = 1] = "Cat";
    animalsNum[animalsNum["Horse"] = 2] = "Horse";
})(animalsNum || (animalsNum = {}));
;
var a = animalsNum.Dog;
//type.setIsEnumNumber(Animal);
console.log('Numeric enum:', a);
var animalsString;
(function (animalsString) {
    animalsString["Dog"] = "DOG";
    animalsString["Cat"] = "CAT";
    animalsString["Horse"] = "HORSE";
})(animalsString || (animalsString = {}));
;
console.log('Numeric enum:', animalsString.Dog);
var AnimalsMix;
(function (AnimalsMix) {
    AnimalsMix["Dog"] = "DOG";
    AnimalsMix[AnimalsMix["Cat"] = 1] = "Cat";
    AnimalsMix[AnimalsMix["Horse"] = 2] = "Horse";
})(AnimalsMix || (AnimalsMix = {}));
;
console.log('Numeric mix:', AnimalsMix.Dog);
console.log('Numeric mix:', AnimalsMix.Cat);
console.log('Numeric mix:', AnimalsMix.Horse);
/**
 * Any
 */
var anyVar = 10;
anyVar = true;
anyVar = 'This is a string';
console.log('Any:', anyVar);
/**
 * Void
 */
function logMe() {
    console.log('This is a log message');
}
console.log('Void:', logMe());
/**
 * Never
 */
function error(message) {
    throw new Error(message);
}
//console.log('Never:',  error('This is a error message'));
//# sourceMappingURL=basic-type.js.map