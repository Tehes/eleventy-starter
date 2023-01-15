module.exports = function(eleventyConfig) {
    // Copy css and img folders
    eleventyConfig.addPassthroughCopy("src/css/");
    eleventyConfig.addPassthroughCopy("src/img/");
  
    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
  
      // When a passthrough file is modified, rebuild the pages:
      passthroughFileCopy: true,
  
      dir: {
        input: 'src',
        includes: "_includes",
        data: "_data",
        output: 'docs'
      }
    };
  };