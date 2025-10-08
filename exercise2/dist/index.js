import readline from "readline";
import { stdin as input, stdout as output } from "process";
var Operator;
(function (Operator) {
    Operator["ADD"] = "+";
    Operator["SUB"] = "-";
    Operator["MUL"] = "*";
    Operator["DIV"] = "/";
    Operator["FULL"] = "all";
})(Operator || (Operator = {}));
const rl = readline.createInterface({ input, output });
rl.question("Nhập vào số thứ nhất: ", (num1) => {
    if (isNaN(Number(num1))) {
        console.log("Số thứ nhất không hợp lệ");
        rl.close();
        return;
    }
    rl.question("Nhập vào số thứ hai: ", (num2) => {
        if (isNaN(Number(num2))) {
            console.log("Số thứ hai không hợp lệ");
            rl.close();
            return;
        }
        rl.question("Lựa chọn phép tính (+) (-) (*) (/) (all): ", (operator) => {
            switch (operator) {
                case Operator.ADD:
                    console.log("Kết quả: ", sum(Number(num1), Number(num2)));
                    break;
                case Operator.SUB:
                    console.log("Kết quả: ", sub(Number(num1), Number(num2)));
                    break;
                case Operator.MUL:
                    console.log("Kết quả: ", mul(Number(num1), Number(num2)));
                    break;
                case Operator.DIV:
                    console.log("Kết quả: ", div(Number(num1), Number(num2)));
                    break;
                case Operator.FULL:
                    console.log("Phép cộng: ", sum(Number(num1), Number(num2)) + "\n" +
                        "Phép trừ: ", sub(Number(num1), Number(num2)) + "\n" +
                        "Phép nhân: ", mul(Number(num1), Number(num2)) + "\n" +
                        "Phép chia: ", div(Number(num1), Number(num2)));
                    break;
                default:
                    break;
            }
            // if (operator === Operator.ADD) {
            //     console.log("Kết quả: ", sum(Number(num1), Number(num2)));
            // } else if (operator === Operator.SUB) {
            //     console.log("Kết quả: ", sub(Number(num1), Number(num2)));
            // } else if (operator === Operator.MUL) {
            //     console.log("Kết quả: ", mul(Number(num1), Number(num2)));
            // } else if (operator === Operator.DIV) {
            //     console.log("Kết quả: ", div(Number(num1), Number(num2)));
            // } else if (operator === Operator.FULL) {
            //     console.log("Phép cộng: ", sum(Number(num1), Number(num2)) + "\n" +
            //     "Phép trừ: ", sub(Number(num1), Number(num2)) + "\n" +
            //     "Phép nhân: ", mul(Number(num1), Number(num2)) + "\n" +
            //     "Phép chia: ", div(Number(num1), Number(num2)));
            // } else {
            //     console.log("Lựa chọn không hợp lệ");
            // }
            rl.close();
        });
    });
});
function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}
function div(a, b) {
    if (b === 0) {
        console.log("Không thể chia cho 0");
        return 0;
    }
    return a / b;
}
//# sourceMappingURL=index.js.map