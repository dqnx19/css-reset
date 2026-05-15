const i18n = {
    en: {
        train: "Train",
        metro: "Metro",
        tram: "Tram",
        bus: "Bus",
        car: "Car",

        ticket: "Ticket",
    },
    cs: {
        train: "Vlak",
        metro: "Metro",
        tram: "Tramvaj",
        bus: "Autobus",
        car: "Auto",

        ticket: "Jízdenka",
    }
}

const lang = navigator.language.slice(0, 2);
const t = i18n[lang] || i18n.en;