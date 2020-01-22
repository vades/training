"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_type_1 = require("./basic-type");
/**
 *  Hadling basic types
 */
var type = new basic_type_1.BasicType();
/**
 * Boolean
 */
type.setDone(true);
console.log('Boolean:', type.getDone());
/**
 * Number
 */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
type.setIsNumber(decimal);
console.log('Number:', type.getIsNumber());
/**
 * String
 */
var str = 'I`m a string';
var fullName = 'John Doe';
var age = 33;
var sentence = "Hello, my name is " + fullName + ".\nI'll be " + (age + 10) + " years old next month.";
type.setIsString(sentence);
console.log('String:', type.getIsString());
/**
 * Array
 */
var arrayNumber1 = [1, 2, 3];
var arrayNumber2 = [1, 2, 3];
var arrayString1 = ['one', 'two', 'three'];
var arrayString2 = ['one', 'two', 'three'];
type.setIsArrayNumber(arrayNumber1);
console.log('Array number:', type.getIsArrayNumber());
type.setIsArrayString(arrayString2);
console.log('Array string:', type.getIsArrayString());
/**
 * Tuple
 */
var tupleOk;
tupleOk = ['abc', 123];
var tupleError;
type.setIsTuple(tupleOk);
console.log('Tuple:', type.getIsTuple());
/**
 * Enum
 */
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 0] = "Dog";
    Animal[Animal["Cat"] = 1] = "Cat";
    Animal[Animal["Horse"] = 2] = "Horse";
})(Animal || (Animal = {}));
;
var a = Animal.Dog;
//type.setIsEnumNumber(Animal);
console.log('Enum numeric:', a);
//# sourceMappingURL=basic-type-run.js.map