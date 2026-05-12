const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const i18n = {
    cs: {
        home_title: "Domovská stránka"
    },
    en: {
        home_title: "Home Page"
    }
}

const lang = navigator.language.slice(0, 2);
const t = i18n[lang] || i18n.en;

function showHome() {
    document.title = t.home_title + " - CSS Reset"
    main.innerHTML = `
        
    `
}

function showCSSFileDetails(nameUpperCase, nameLowerCase, type) {
    document.title = `${nameUpperCase} - CSS Reset`
    main.innerHTML = `
        <h1>${nameUpperCase}</h1>
        <section>
            <h2>${nameUpperCase}</h2>
            <p>${nameLowerCase}</p>
        </section>
        <section>
            <h2>Implementing CSS Reset on your page</h2>
            <p>Use one of the following methods:</p>
            <p id="head_link"></p>
            <p id="import"></p>
        </section>
    `

    document.querySelector("#head_link").innerText += `Adding this code to head element: <link rel="stylesheet" href="css/elements/${nameLowerCase}.css">`;
    document.querySelector("#import").innerText += `Add this code to head element: <style> @import url("css/elements/${nameLowerCase}.css"); </style>`;
}

showHome();