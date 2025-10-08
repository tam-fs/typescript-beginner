import readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
rl.question("Nhập một số bất kì: ", (answer) => {
    if(isNaN(Number(answer))){
        console.log("Đây không phải là số");
        rl.close();
        return;
    }
    if(isEven(Number(answer))) {
        console.log(`Số ${answer} chia hết cho 2`);
    } else {
        console.log(`Số ${answer} không chia hết cho 2`);
    }
    rl.close();
})

function isEven(n: number): boolean {
    return n % 2 === 0;
}