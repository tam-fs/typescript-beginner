let arr = Array.from(Array(50).keys()).map(x => x + 1);
let evenArr = arr.filter(isEven);
let oddArr = arr.filter(isOdd);
console.log("Số chẵn: ", evenArr.toString());
console.log("Số lẻ: ", oddArr.toString());
function isEven (num: number) : boolean {
    return num % 2 === 0;
}
function isOdd (num: number) : boolean {
    return num % 2 !== 0;
}
