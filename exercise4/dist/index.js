import readline from "readline";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });
rl.question("Nhập một số bất kì: ", (answer) => {
    if (isEven(Number(answer))) {
        console.log(`Số ${answer} chia hết cho 2`);
    }
    else {
        console.log(`Số ${answer} không chia hết cho 2`);
    }
    rl.close();
});
function isEven(n) {
    return n % 2 === 0;
}
//# sourceMappingURL=index.js.map