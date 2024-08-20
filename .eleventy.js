function generateTestCases() {
    const testCases = [];
    for (const lang of ["en", "fr"]) {
        for (const langMethod of ["htmlFile", "js"]) {
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
        case "htmlFile":
            return "Set in the HTML file";
        case "js":
            return "Set by JavaScript";
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
