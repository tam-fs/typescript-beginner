import readline from 'readline';
import {stdin as input, stdout as output} from 'process';

const rl = readline.createInterface({ input, output });
rl.question("Nhập vào số cần kiểm tra : ", (answer) => {
    if(isInteger(Number(answer))){
        console.log("Đây là số nguyên");
    }else{
        console.log("Đây không phải là số nguyên");
    }   
    rl.close();
})

function isInteger (n: number): boolean {
    return Number.isInteger(n);
}
