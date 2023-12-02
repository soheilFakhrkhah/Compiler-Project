const { readFile, emptyFile } = require("./fileHandling");
const { check } = require("./tokenGenerator");



try {
    //NOTE - we must clear the file before anything so that we avoid predicted bugs
    emptyFile()
    //NOTE - the fetched lines will come here using the readFile method in fileHandling module
    readFile().forEach((line, index) => {
        check(line, index)
    })
} catch (error) {
    console.log(error);
}