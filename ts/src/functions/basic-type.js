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
//# sourceMappingURL=basic-type.js.map