module.exports = {
    eleventyComputed: {
        hello: function(data) {
        return data.page.fileSlug;
        }
    }
  };