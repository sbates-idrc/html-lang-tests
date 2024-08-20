const dynamicContentTree = {
    "en": `
<h1>hello</h1>

<p>hello</p>

<p><button>hello</button></p>

<p><button aria-label="hello">
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="blue" />
    </svg>
</button></p>
`,
    "fr": `
<h1>bonjour</h1>

<p>bonjour</p>

<p><button>bonjour</button></p>

<p><button aria-label="bonjour">
    <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="blue" />
    </svg>
</button></p>
`
};

function getLang() {
    return document.documentElement.getAttribute("lang");
}

function setLang(lang) {
    document.documentElement.setAttribute("lang", lang);
}

function displayCurrentLang() {
    document.getElementById("lang-now").innerText = getLang();
}

function setDynamicContent(lang) {
    // Dynamic text and aria-label
    const newTextContent = lang === "en" ? "hello" : "bonjour";
    for (const elem of document.getElementsByClassName("dynamic-text")) {
        elem.innerText = newTextContent;
    }
    for (const elem of document.getElementsByClassName("dynamic-aria-label")) {
        elem.setAttribute("aria-label", newTextContent);
    }

    // Dynamic tree
    document.getElementById("dynamic-content-tree").innerHTML = dynamicContentTree[lang];
}

function toggleLang() {
    const newLang = getLang() === "en" ? "fr" : "en";
    setLang(newLang);
    setDynamicContent(newLang);
    displayCurrentLang();
}
