module.exports = {
    eleventyComputed: {
        gallery: function (data) {
            const directory = "./src/img/" + data.page.fileSlug;
            const fs = require("fs");
            return fs.readdirSync(directory);
        },
    },
};
