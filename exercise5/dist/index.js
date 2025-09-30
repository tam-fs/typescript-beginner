import readline from "readline";
import { stdin as input, stdout as output } from "process";
const rl = readline.createInterface({ input, output });
rl.question("Nhập tên học sinh: ", (answer) => {
    rl.question(`Nhập điểm của ${answer}: `, (answer2) => {
        if (Number(answer2) < 0 || Number(answer2) > 10) {
            console.log("Điểm không hợp lệ");
            rl.close();
            return;
        }
        console.log("Xếp loại: " + classify(Number(answer2)));
        rl.close();
    });
});
function classify(score) {
    if (score >= 8) {
        return "Giỏi";
    }
    else if (score > 5) {
        return "Khá";
    }
    else if (score >= 5) {
        return "Trung bình";
    }
    return "Trung bình";
}
//# sourceMappingURL=index.js.map