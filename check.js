const upperLetters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I",
    "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"
];
const lowerLetters = [];
upperLetters.forEach(element => {
    lowerLetters.push(element.toLocaleLowerCase())
});
const numbers = [
    "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9"
];

// functions for DFAs

// DFA for variables
const variableCheckSwitchCase = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (upperLetters.includes(word[counter])) {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (upperLetters.includes(word[counter]) || lowerLetters.includes(word[counter])) {
                    state = 2;
                    counter++;
                    break;
                } else if (numbers.includes(word[counter])) {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                if (numbers.includes(word[counter])) {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
        }
    }
    return flg;
}


// DFA for functions
const functionCheckSwitchCase = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (upperLetters.includes(word[counter]) || lowerLetters.includes(word[counter])) {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (upperLetters.includes(word[counter]) || lowerLetters.includes(word[counter]) || numbers.includes(word[counter])) {
                    state = 2;
                    counter++;
                    break
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
        }
    }
    return flg;
}


// DFA for "circum"
const circumCheckSwitchCase = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (word[counter] === "c") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                };
            case 2:
                if (word[counter] === "i") {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                if (word[counter] === "r") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 5:
                if (word[counter] === "c") {
                    state = 6;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 6:
                if (word[counter] === "u") {
                    state = 7;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 7:
                if (word[counter] === "m") {
                    state = 8;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 8:
                //NOTE - check if the length of the entered word exceeds the length of the key word and change the flag
                word.length > 6 ? flg = false : flg = true;
                break;
        }
    }
    return flg;
}


// DFA for "otherwise"
const otherwiseCheckSwitchCase = function (word, wordIndex) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (word[counter] === "o") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 1:
                if (word[counter] === "o") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (word[counter] === "t") {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                if (word[counter] === "h") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 5:
                if (word[counter] === "e") {
                    state = 6;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 6:
                if (word[counter] === "r") {
                    state = 7;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 7:
                if (word[counter] === "w") {
                    state = 8;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 8:
                if (word[counter] === "i") {
                    state = 9;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 9:
                if (word[counter] === "s") {
                    state = 10;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 10:
                if (word[counter] === "e") {
                    state = 11;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 11:
                word.length > 9 ? flg = false : flg = true;
                break;
        }
    }
    return flg;
}


// DFA for "go"
const goCheckSwitchCase = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (word[counter] === "g") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (word[counter] === "o") {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                word.length > 2 ? flg = false : flg = true;
                break;
        }
    }
    return flg;
}


// DFA for "execute"
const executeCheckSwitchCase = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (word[counter] === "e") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (word[counter] === "x") {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                if (word[counter] === "e") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 5:
                if (word[counter] === "c") {
                    state = 6;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 6:
                if (word[counter] === "u") {
                    state = 7;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 7:
                if (word[counter] === "t") {
                    state = 8;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 8:
                if (word[counter] === "e") {
                    state = 9;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 9:
                word.length > 7 ? flg = false : flg = true;
                break;
        }
    }
    return flg;
}


// DFA for "backflip"
const backflipCheckSwitchCase = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (word[counter] === "b") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (word[counter] === "a") {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                if (word[counter] === "c") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 5:
                if (word[counter] === "k") {
                    state = 6;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 6:
                if (word[counter] === "f") {
                    state = 7;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 7:
                if (word[counter] === "l") {
                    state = 8;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 8:
                if (word[counter] === "i") {
                    state = 9;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 9:
                if (word[counter] === "p") {
                    state = 10;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 10:
                word.length > 8 ? flg = false : flg = true;
                break;
        }
    }
    return flg;
}


// DFA for "var"
const varCheckSwitchCase = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (word[counter] === "v") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (word[counter] === "a") {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                if (word[counter] === "r") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 5:
                word.length > 3 ? flg = false : flg = true;
                break;
        }
    }
    return flg;
}

const untilCheckSwitchCheck = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (word[counter] === "u") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (word[counter] === "n") {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                if (word[counter] === "t") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 5:
                if (word[counter] === "i") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 6:
                if (word[counter] === "l") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 7:
                word.length > 3 ? flg = false : flg = true;
                break;
        }
    }
    return flg;
}

const otherCheckSwitchCheck = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (word[counter] === "o") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (word[counter] === "t") {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                if (word[counter] === "h") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 5:
                if (word[counter] === "e") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 6:
                if (word[counter] === "r") {
                    state = 5;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 7:
                word.length > 3 ? flg = false : flg = true;
                break;
        }
    }
    return flg;
}

const toCheckSwitchCase = function (word) {
    let state = 1;
    let counter = 0;
    let flg = true;
    const iterate = word.length + 1;

    for (let i = 0; i < iterate; i++) {
        switch (state) {
            case 1:
                if (word[counter] === "t") {
                    state = 2;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 2:
                if (word[counter] === "o") {
                    state = 4;
                    counter++;
                    break;
                } else {
                    state = 3;
                    counter++;
                    break;
                }
            case 3:
                flg = false;
                counter++;
                break;
            case 4:
                word.length > 2 ? flg = false : flg = true;
                break;
        }
    }
    return flg;
}


module.exports = {
    variableCheckSwitchCase,
    functionCheckSwitchCase,
    circumCheckSwitchCase,
    otherwiseCheckSwitchCase,
    goCheckSwitchCase,
    executeCheckSwitchCase,
    backflipCheckSwitchCase,
    varCheckSwitchCase,
    untilCheckSwitchCheck,
    otherCheckSwitchCheck,
    toCheckSwitchCase
}