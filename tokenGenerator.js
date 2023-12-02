//ANCHOR - here are the modules that are used in my code (external / internal)
const fs = require("fs");
const { circumCheckSwitchCase,
    otherwiseCheckSwitchCase,
    goCheckSwitchCase,
    executeCheckSwitchCase,
    backflipCheckSwitchCase,
    varCheckSwitchCase,
    untilCheckSwitchCheck,
    otherCheckSwitchCheck,
    toCheckSwitchCase,
    variableCheckSwitchCase,
    functionCheckSwitchCase
} = require("./check.js");
const { writeFile } = require("./fileHandling.js");

//NOTE - these two would help us recognize if an id element has been used before (avoid duplicate variable definition)
const identifierList = [];
let idCounter = 0;

//NOTE - this is the function to check the conditions that would fulfill the invented of mine
const check = function (line, lineIndex) {
    const errorGenerator = function (error) {
        throw error;
    }

    const keyWords = ["circum", "otherwise", "go", "execute", "backflip", "var", "other", "until", "to"];
    const operand = ["+", "-", "*", "/", ":", "<>", ">>", "<<", "||", "&&", "(", ")", "[", "]", "{", "}", "'", ",", "=>"];
    let error = "";


    //NOTE - tokens will be stored here after generated.
    const tokenList = [];

    //NOTE - this would separate the words inside a line we send to this module
    const words = line.split(" ");
    words.forEach((item, wordIndex) => {
        let lineNumber = lineIndex + 1;
        let wordNumber = wordIndex + 1;

        if (circumCheckSwitchCase(item) && wordIndex === 0) {
            const TK = `{cir_TK}`;
            tokenList.push(TK);
        } else if (otherwiseCheckSwitchCase(item) && wordIndex === 0) {
            const TK = `{otw_TK}`;
            tokenList.push(TK);
        } else if (goCheckSwitchCase(item) && wordIndex === 0) {
            const TK = `{go_TK}`;
            tokenList.push(TK);
        } else if (executeCheckSwitchCase(item) && wordIndex === 0) {
            const TK = `{exc_TK}`;
            tokenList.push(TK);
        } else if (backflipCheckSwitchCase(item) && wordIndex === 0) {
            const TK = `{bcf_TK}`;
            tokenList.push(TK);
        } else if (varCheckSwitchCase(item) && wordIndex === 0) {
            const TK = `{var_TK}`;
            tokenList.push(TK);
        } else if (otherCheckSwitchCheck(item) && wordIndex === 0) {
            const TK = `{other_TK}`;
            tokenList.push(TK);
        } else if (untilCheckSwitchCheck(item)) {
            const TK = `{until_TK}`;
            tokenList.push(TK);
        } else if (toCheckSwitchCase(item)) {
            const TK = `{to_TK}`;
            tokenList.push(TK);
        } else if (!circumCheckSwitchCase(item) && !otherwiseCheckSwitchCase(item) && !goCheckSwitchCase(item) && !executeCheckSwitchCase(item) && !backflipCheckSwitchCase(item) && !varCheckSwitchCase(item) && !otherCheckSwitchCheck(item) && !untilCheckSwitchCheck(item) && !toCheckSwitchCase(item) && !operand.includes(item) && wordIndex === 0) {
            error = `Wrong_keyword_Error!: ${lineNumber}-${wordNumber} : ${item}`;
            errorGenerator(error);
        } else if (variableCheckSwitchCase(item) && wordIndex === 1 && tokenList[0] === "{var_TK}" && !identifierList.includes(item)) {
            if (identifierList.includes(item)) {
                const TK = `{vri_TK, ${identifierList.indexOf(item)}}`;
                tokenList.push(TK);
            } else {
                idCounter++;
                identifierList.push(item);
                const TK = `{vri_TK, ${idCounter}}`;
                tokenList.push(TK);
            }
        } else if (functionCheckSwitchCase(item) && wordIndex === 1 && tokenList[0] === "{exc_TK}" && !identifierList.includes(item) && !keyWords.includes(item)) {
            if (identifierList.includes(item)) {
                const TK = `{func_TK, ${identifierList.indexOf(item)}}`;
                tokenList.push(TK);
            } else {
                idCounter++;
                identifierList.push(item);
                const TK = `{func_TK, ${idCounter}}`;
                tokenList.push(TK);
            }
        } else if (!variableCheckSwitchCase(item) && !operand.includes(item) && wordIndex == 1 && !keyWords.includes(item)) {
            error = `Identifier_Error!: ${lineNumber}-${wordNumber} : ${item}`;
            errorGenerator(error);
        } else if (!functionCheckSwitchCase(item) && !operand.includes(item) && wordIndex == 1 && !keyWords.includes(item)) {
            error = `Function_Identifier_Error!: ${lineNumber}-${wordNumber} : ${item}`;
            errorGenerator(error);
        } else if (identifierList.includes(item)) {
            error = `Duplicate_Definition_Error!: ${lineNumber}-${wordNumber} : ${item}`;
            errorGenerator(error);
        } else if (keyWords.includes(item) && wordIndex == 1) {
            error = `Keyword_assignment_Error!: ${lineNumber}-${wordNumber} : ${item}`;
            errorGenerator(error);
        } else if (item === "+") {
            const TK = `{pl_TK}`;
            tokenList.push(TK);
        } else if (item === "-") {
            const TK = `{mi_TK}`;
            tokenList.push(TK);
        } else if (item === "*") {
            const TK = `{mu_TK}`;
            tokenList.push(TK);
        } else if (item === "/") {
            const TK = `{dv_TK}`;
            tokenList.push(TK);
        } else if (item === ":") {
            const TK = `{as_TK}`;
            tokenList.push(TK);
        } else if (item === "<>") {
            const TK = `{eq_TK}`;
            tokenList.push(TK);
        } else if (item === "<<") {
            const TK = `{gr_TK}`;
            tokenList.push(TK);
        } else if (item === ">>") {
            const TK = `{ls_TK}`;
            tokenList.push(TK);
        } else if (item === "||") {
            const TK = `{or_TK}`;
            tokenList.push(TK);
        } else if (item === "&&") {
            const TK = `{nd_TK}`;
            tokenList.push(TK);
        } else if (item[0] === "(") {
            const TK = `{openP_TK}`;
            tokenList.push(TK);
            if (item.slice(-1) === ")") {
                const TK = `{closeP_TK}`;
                tokenList.push(TK);
            }
        } else if (item.slice(-1) === ")") {
            const TK = `{closeP_TK}`;
            tokenList.push(TK);
        } else if (item[0] === "[") {
            const TK = `{openB_TK}`;
            tokenList.push(TK);
            if (item.slice(-1) === "]") {
                const TK = `{closeB_TK}`;
                tokenList.push(TK);
            }
        } else if (item.slice(-1) === "]") {
            const TK = `{closeB_TK}`;
            tokenList.push(TK);
        } else if (item[0] === "{") {
            const TK = `{openCB_TK}`;
            tokenList.push(TK);
            if (item.slice(-1) === "}") {
                const TK = `{closeCB_TK}`;
                tokenList.push(TK);
            }
        } else if (item.slice(-1) === "}") {
            const TK = `{closeCB_TK}`;
            tokenList.push(TK);
        } else if (item === "=>") {
            const TK = `{result_TK}`;
            tokenList.push(TK);
        } else if (item === ",") {
            const TK = `{comma_TK}`;
            tokenList.push(TK);
        } else if (item[0] === "'" && item.slice(-1) === "'") {
            if (item[0] === "'") {
                const TK = `{quot_TK}`;
                tokenList.push(TK)
            }
            const TK = `{fixed_TK, ${item.slice(1, item.length - 1)}}`;
            tokenList.push(TK);
            if (item.slice(-1) === "'") {
                const TK = `{quot_TK}`;
                tokenList.push(TK)
            }
        } else {
            //NOTE - this is where the error of my language will be formed
            error = `Syntax_Error!: ${lineNumber}-${wordNumber} : ${item}`;
            errorGenerator(error);
        }
    })

    writeFile(tokenList);
}



module.exports = {
    check,
}