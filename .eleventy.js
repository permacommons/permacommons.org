function wrapHeadingSectionsPlugin(md) {
  md.core.ruler.after("block", "wrap_heading_sections", state => {
    const sections = state.env.headingSections;

    if (!Array.isArray(sections) || sections.length === 0) {
      return;
    }

    // Pages opt into this in front matter. Each config says:
    // when you see heading level N, wrap that heading plus following blocks
    // until one of the configured stop conditions is reached.
    const configuredSections = sections.map(section => ({
      headingLevel: section.headingLevel,
      sectionTag: section.sectionTag || "section",
      sectionClass: section.sectionClass || "",
      bodyTag: section.bodyTag || "div",
      bodyClass: section.bodyClass || "",
      stopHeadingLevels: Array.isArray(section.stopHeadingLevels)
        ? section.stopHeadingLevels
        : [section.headingLevel],
      stopTokenTypes: Array.isArray(section.stopTokenTypes) ? section.stopTokenTypes : []
    }));

    const getHeadingLevel = token => {
      if (!token || token.type !== "heading_open") {
        return null;
      }

      return Number.parseInt(token.tag.slice(1), 10);
    };

    const renderOpenTag = (tagName, className) =>
      className ? `<${tagName} class="${md.utils.escapeHtml(className)}">` : `<${tagName}>`;

    const nextTokens = [];

    for (let index = 0; index < state.tokens.length; index += 1) {
      const token = state.tokens[index];
      const sectionConfig = configuredSections.find(config => {
        return token.type === "heading_open" && getHeadingLevel(token) === config.headingLevel;
      });

      if (!sectionConfig) {
        nextTokens.push(token);
        continue;
      }

      // Copy the heading itself into the wrapper unchanged, then collect
      // every following token until the next configured boundary.
      let headingCloseIndex = index + 1;
      while (headingCloseIndex < state.tokens.length) {
        const candidate = state.tokens[headingCloseIndex];
        if (candidate.type === "heading_close" && candidate.tag === token.tag) {
          headingCloseIndex += 1;
          break;
        }
        headingCloseIndex += 1;
      }

      let sectionEndIndex = headingCloseIndex;
      while (sectionEndIndex < state.tokens.length) {
        const candidate = state.tokens[sectionEndIndex];
        const candidateHeadingLevel = getHeadingLevel(candidate);

        if (
          sectionConfig.stopTokenTypes.includes(candidate.type) ||
          (candidateHeadingLevel !== null &&
            sectionConfig.stopHeadingLevels.includes(candidateHeadingLevel))
        ) {
          break;
        }

        sectionEndIndex += 1;
      }

      const sectionOpen = new state.Token("html_block", "", 0);
      sectionOpen.content = renderOpenTag(sectionConfig.sectionTag, sectionConfig.sectionClass);
      nextTokens.push(sectionOpen);

      nextTokens.push(...state.tokens.slice(index, headingCloseIndex));

      if (headingCloseIndex < sectionEndIndex) {
        // Answer/body content goes in a separate container so CSS can style
        // paragraphs, lists, and other block content as one visual unit.
        const bodyOpen = new state.Token("html_block", "", 0);
        bodyOpen.content = renderOpenTag(sectionConfig.bodyTag, sectionConfig.bodyClass);
        nextTokens.push(bodyOpen);
        nextTokens.push(...state.tokens.slice(headingCloseIndex, sectionEndIndex));

        const bodyClose = new state.Token("html_block", "", 0);
        bodyClose.content = `</${sectionConfig.bodyTag}>`;
        nextTokens.push(bodyClose);
      }

      const sectionClose = new state.Token("html_block", "", 0);
      sectionClose.content = `</${sectionConfig.sectionTag}>`;
      nextTokens.push(sectionClose);

      index = sectionEndIndex - 1;
    }

    state.tokens = nextTokens;
  });
}

module.exports = function(eleventyConfig) {
  eleventyConfig.amendLibrary("md", mdLib => {
    mdLib.use(wrapHeadingSectionsPlugin);
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/icons");
  eleventyConfig.addPassthroughCopy("src/videos");
  eleventyConfig.addPassthroughCopy("CNAME");

  // Add date filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  eleventyConfig.addFilter("dateIso", dateObj => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  eleventyConfig.addFilter("dateToRfc3339", dateObj => {
    return new Date(dateObj).toISOString();
  });

  eleventyConfig.addFilter("getNewestCollectionItemDate", collection => {
    if (!collection || !collection.length) {
      return new Date();
    }
    return new Date(Math.max(...collection.map(item => {
      return item.date;
    })));
  });

  eleventyConfig.addFilter("htmlToAbsoluteUrls", (htmlContent, base) => {
    // Simple implementation - in production you might want a more robust solution
    return htmlContent;
  });

  // Get posts collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
