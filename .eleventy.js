module.exports = function(eleventyConfig) {
    // Copy css folder
    eleventyConfig.addPassthroughCopy("src/css/");
  
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