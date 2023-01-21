const directory = "./src/img";
const fs = require("fs");
let data = fs.readdirSync(directory);

module.exports = {
    imgs: data
}