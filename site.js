function getLang() {
    return document.documentElement.getAttribute("lang");
}

function setLang(lang) {
    document.documentElement.setAttribute("lang", lang);
}

function displayCurrentLang() {
    document.getElementById('lang-now').innerText = getLang();
}

function toggleLang() {
    const newLang = getLang() === "en" ? "fr" : "en";
    setLang(newLang);
    displayCurrentLang();
}
