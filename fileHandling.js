const fs = require("fs");

const readFile = function () {
    const textFile = fs.readFileSync("code.txt", "utf-8");
    const lines = textFile.split("\r\n");


    //NOTE - this is an object to record values of each line separately.
    const lineCounter = []
    lines.forEach((line, index) => {
        lineCounter.push({
            lineNumber: index + 1,
            value: line
        })
    })
    return lines;
}

const writeFile = function (tokenList) {

    //NOTE - here we write the created tokens in main.js to the text file of ours
    fs.appendFileSync("tokens.txt", `${tokenList.join("")}\n`);
}

const emptyFile = function() {
    
    //NOTE - this would help us clear the data inside the file before in case there are things.
    fs.writeFileSync("tokens.txt", "");
}


module.exports = {
    readFile,
    writeFile,
    emptyFile
}
