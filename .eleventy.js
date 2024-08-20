function generateTestCases() {
    const testCases = [];
    for (const lang of ["en", "fr"]) {
        for (const langMethod of ["html", "js"]) {
            testCases.push({
                lang,
                langMethod
            });
        }
    }
    return testCases;
}

function formatLangMethod(langMethod) {
    switch (langMethod) {
        case "html":
            return "set in the HTML file";
        case "js":
            return "set by JavaScript";
        default:
            throw new Error(`Bad langMethod "${langMethod}"`);
    }
}

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData("testCases", generateTestCases());

    eleventyConfig.addFilter("testCaseSlug", function(testCase) {
        return `${testCase.lang}-${testCase.langMethod}`;
    });

    eleventyConfig.addFilter("testCaseTitle", function (testCase) {
        return `Start with lang="${testCase.lang}", ${formatLangMethod(testCase.langMethod)}`;
    });

    eleventyConfig.addFilter("formatLangMethod", formatLangMethod);

    eleventyConfig.addPassthroughCopy("site.js");
};
