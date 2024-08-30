function generateTestCases() {
    const testCases = [];
    for (const startingLang of ["en", "fr"]) {
        for (const startingLangMethod of ["html", "js"]) {
            testCases.push({
                startingLang,
                startingLangMethod
            });
        }
    }
    return testCases;
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData("testCases", generateTestCases());

    eleventyConfig.addFilter("formatLangMethod", function(langMethod) {
        switch (langMethod) {
            case "html":
                return "set in the HTML file";
            case "js":
                return "set by JavaScript";
            default:
                throw new Error(`Bad langMethod "${langMethod}"`);
        }
    });

    // GitHub Pages
    eleventyConfig.addPassthroughCopy("src/.nojekyll");

    eleventyConfig.addPassthroughCopy("src/site.js");

    return {
		dir: {
		    input: "src",
            // Host on GitHub Pages using the "docs" directory
			output: "docs"
		},
        // GitHub Pages
        pathPrefix: "/html-lang-tests/"
	};
};
