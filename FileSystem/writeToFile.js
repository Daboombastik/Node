const fs = require("fs");
const readline = require('readline');
const filePath = "./readme.txt";
const question = "What do you think of Node.js?";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(question, answer => {
    writeToFile(answer);
    rl.close();
});

function writeToFile (answer) {
    fs.writeFile (filePath, answer, "utf-8", err => {
        if (err) console.log("Error occurred while writing to a file");
    });
}

// const callback = function () {
//     rl.question(question, (answer) => {
//         fs.open(filePath, 'wx', (err, fd) => {
//             if (err) throw err;
//             fs.appendFile(fd, answer, "utf-8", (err) => {
//                 fs.close(fd, (err) => {
//                     if (err) throw err;
//                 });
//                 if (err) throw err;
//             });
//         });
//         rl.close();
//     });
// }




