"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = Array.from(Array(50).keys()).map(x => x + 1);
let evenArr = arr.filter(isEven);
let oddArr = arr.filter(isOdd);
console.log("Số chẵn: ", evenArr.toString());
console.log("Số lẻ: ", oddArr.toString());
function isEven(num) {
    return num % 2 === 0;
}
function isOdd(num) {
    return num % 2 !== 0;
}
//# sourceMappingURL=index.js.map