const i18n = {
    cs: {
        home_title: "Domovská stránka"
    }
}

const lang = navigator.language.slice(0, 2);
const t = i18n[lang] || i18n.en;