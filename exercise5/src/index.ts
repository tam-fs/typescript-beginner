import readline from "readline";
import {stdin as input, stdout as output} from "process";
// import promptSync from "prompt-sync";

// const prompt = promptSync();
const rl = readline.createInterface({input, output});

// const studentName = prompt("Nhập tên học sinh (prompt): ");
// const studentScore = prompt(`Nhập điểm của ${studentName} (prompt): `);

// if(Number(studentScore) < 0 || Number(studentScore) > 10 || isNaN(Number(studentScore))) {
//     console.log("Điểm không hợp lệ");
//     process.exit(1);
// } else {
//     console.log("Xếp loại (prompt): " + classify(Number(studentScore)));
// }

rl.question("Nhập tên học sinh: ", (answer) => {
    rl.question(`Nhập điểm của ${answer}: `, (answer2) => {
        if(Number(answer2) < 0 || Number(answer2) > 10 ||  isNaN(Number(answer2))) {
            console.log("Điểm không hợp lệ");
            rl.close();
            return;
        }
        console.log("Xếp loại: " + classify(Number(answer2)));
        rl.close();
    })
})

function classify(score: number): string {
    if(score >= 8) {
        return "Giỏi";
    } else if(score > 5) {
        return "Khá";
    } 
    // else if(score <= 5) {
    //     return "Trung bình";
    // }
    return "Trung bình";
}