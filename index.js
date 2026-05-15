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
    document.title = t.home_title + " - Web Reset"
    main.innerHTML = `
        <h1>Home Page</h1>
        <section>
            <h2>Elements</h2>
            <h3>Base Structure</h3>
            <div class="cards">
                <button class="card" onclick="showCSSFileDetails('All', 'all', 'elements')">
                    <span>All elements</span>
                </button>
                <button class="card" onclick="showCSSFileDetails('Body', 'body', 'elements')">
                    <span>Body</span>
                </button>
                <button class="card" onclick="showCSSFileDetails('Header', 'header', 'elements')">
                    <span>Header</span>
                </button>
                <button class="card" onclick="showCSSFileDetails('Main', 'main', 'elements')">
                    <span>Main</span>
                </button>
                <button class="card" onclick="showCSSFileDetails('Footer', 'footer' , 'elements')">
                    <span>Footer</span>
                </button>
                <button class="card">
                    <span>Section</span>
                </button>
            </div>
            <h3>Text and Lists</h3>
            <div class="cards">
                <button class="card" onclick="showCSSFileDetails('H1 (Heading 1)', 'h1', 'elements')">
                    <span>H1 (Heading 1)</span>
                </button>
                <button class="card" onclick="showCSSFileDetails('H2 (Heading 1)', 'h2', 'elements')">
                    <span>H2 (Heading 2)</span>
                </button>
                <button class="card" onclick="showCSSFileDetails('P (Paragraph)', 'p', 'elements')">
                    <span>P (Paragraph)</span>
                </button>
                <button class="card" onclick="showCSSFileDetails('A (Link)', 'a', 'elements')">
                    <span>A (Link)</span>
                </button>
                <button class="card" onclick="showCSSFileDetails('LI (List Iem)', 'li', 'elements')">
                    <span>LI (List Item)</span>
                </button>
            </div>
            <h3>Images</h3>
            <div class="cards">
                <button class="card" onclick="showCSSFileDetails('Img (Image)', 'img', 'elements')">
                    <span>Img (Image)</span>
                </button>
            </div>
            <h3>Table</h3>
            <div class="cards">
                <button class="card">
                    <span>Table</span>
                </button>
                <button class="card">
                    <span>TR (Table Row)</span>
                </button>
            </div>
        </section>
        <section>
            <h2>Components</h2>
            <div class="cards">
                <button class="card" onclick="showCSSFileDetails('Cards', 'cards', 'components')">
                    <span>Cards</span>
                </button>
                <button class="card" onclick="showCSSFileDetails('Copy Box', 'copy-box', 'components')">
                    <span>Copy Box</span>
                </button>
            </div>
        </section>
    `
}

function showCSSFileDetails(nameUpperCase, nameLowerCase, type) {
    document.title = `${nameUpperCase} - Web Reset`
    main.innerHTML = `
        <h1>${nameUpperCase}</h1>
        <section>
            <h2>Implementing</h2>
            <div class="copy-box">
                <input type="text" value="@import url('css/${type}/${nameLowerCase}.css');" readonly>
                <button>Copy</button>
            </div>
        </section>
    `
}

showHome();