module.exports = function () {
    const directory = "./src/img";
    const fs = require("fs");
    return fs.readdirSync(directory);
}