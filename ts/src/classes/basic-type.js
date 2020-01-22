"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasicType = /** @class */ (function () {
    function BasicType() {
    }
    BasicType.prototype.getIsNumber = function () {
        return this.isNumber;
    };
    BasicType.prototype.setIsNumber = function (isNumber) {
        this.isNumber = isNumber;
    };
    BasicType.prototype.getIsString = function () {
        return this.isString;
    };
    BasicType.prototype.setIsString = function (isString) {
        this.isString = isString;
    };
    BasicType.prototype.getIsArrayNumber = function () {
        return this.isArrayNumber;
    };
    BasicType.prototype.setIsArrayNumber = function (isArrayNumber) {
        this.isArrayNumber = isArrayNumber;
    };
    BasicType.prototype.getIsArrayString = function () {
        return this.isArrayString;
    };
    BasicType.prototype.setIsArrayString = function (isArrayString) {
        this.isArrayString = isArrayString;
    };
    BasicType.prototype.getIsTuple = function () {
        return this.isTuple;
    };
    BasicType.prototype.setIsTuple = function (isTuple) {
        this.isTuple = isTuple;
    };
    BasicType.prototype.getIsEnumNumber = function () {
        return this.isEnumNumber;
    };
    BasicType.prototype.setIsEnumNumber = function (isEnumNumber) {
        this.isEnumNumber = isEnumNumber;
    };
    BasicType.prototype.getDone = function () {
        return this.done;
    };
    BasicType.prototype.setDone = function (done) {
        this.done = done;
    };
    return BasicType;
}());
exports.BasicType = BasicType;
//# sourceMappingURL=basic-type.js.map