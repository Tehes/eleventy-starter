module.exports = {
    eleventyComputed: {
        gallery: function (data) {
            const directory = "./src/" + data.imgFolder;
            const fs = require("fs");
            return fs.readdirSync(directory);
        },
    },
};
