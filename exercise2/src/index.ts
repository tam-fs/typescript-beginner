import readline from "readline";
import { stdin as input, stdout as output } from "process";

enum Operator {
    ADD = "+",
    SUB = "-",
    MUL = "*",
    DIV = "/",
    FULL = "all"
}

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
        if (operator === Operator.ADD) {
            console.log("Kết quả: ", sum(Number(num1), Number(num2)));
        } else if (operator === Operator.SUB) {
            console.log("Kết quả: ", sub(Number(num1), Number(num2)));
        } else if (operator === Operator.MUL) {
            console.log("Kết quả: ", mul(Number(num1), Number(num2)));
        } else if (operator === Operator.DIV) {
            console.log("Kết quả: ", div(Number(num1), Number(num2)));
        } else if (operator === Operator.FULL) {
            console.log("Phép cộng: ", sum(Number(num1), Number(num2)) + "\n" +
            "Phép trừ: ", sub(Number(num1), Number(num2)) + "\n" +
            "Phép nhân: ", mul(Number(num1), Number(num2)) + "\n" +
            "Phép chia: ", div(Number(num1), Number(num2)));
        } else {
            console.log("Lựa chọn không hợp lệ");
        }
        rl.close();
    });    
  });
  
});

function sum (a: number, b: number): number {
    return a + b;
}

function sub (a: number, b: number): number {
    return a - b;
}

function mul (a: number, b: number): number {
    return a * b;
}

function div (a: number, b: number): number {
    return a / b;
}