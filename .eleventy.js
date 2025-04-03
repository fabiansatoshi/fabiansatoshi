module.exports = function(eleventyConfig) {
  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("date", (dateObj, format = "dd/MM/yyyy") => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(format);
  });

  eleventyConfig.addCollection("post", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").reverse();
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    pathPrefix: process.env.ELEVENTY_ENV === "prod" ? "/fabiansatoshi/" : "/"

  };
};
