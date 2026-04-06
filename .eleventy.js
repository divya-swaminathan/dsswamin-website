/** CSS / nav: relative path back to site root (works on custom domain and GitHub project Pages). */
function rootRel(pageUrl) {
  if (!pageUrl || pageUrl === "/") return "";
  if (/^\/[^/]+\.[a-zA-Z0-9]+$/.test(pageUrl)) return "";
  const segments = pageUrl.split("/").filter(Boolean);
  const depth = segments.length;
  if (depth === 0) return "";
  return "../".repeat(depth);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("nowIso", () => new Date().toISOString());

  // Paths are resolved from the project root (not the Eleventy input dir).
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/files");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  const dateIso = (value) => {
    const d = value ? new Date(value) : new Date();
    return d.toISOString();
  };
  const readableDate = (value) => {
    const d = value ? new Date(value) : new Date();
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  eleventyConfig.addFilter("rootRel", (pageUrl) => rootRel(pageUrl));
  eleventyConfig.addFilter("dateIso", dateIso);
  eleventyConfig.addFilter("readableDate", readableDate);

  eleventyConfig.addCollection("postsSorted", (collectionApi) =>
    collectionApi.getFilteredByTag("posts").sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
