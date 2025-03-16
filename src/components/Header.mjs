export const Header = new CjsComponent((data) => {
    const url = new URLSearchParams(window.location.search);
    let path = url.get('path');
    let info;

    if(path=="blogs")path="Blogi",info = "Przeglądasz najnowsze posty z blogu informatycznego"
    if(path=="contact")path="Kontakt",info = "Skontaktuj się z nami"
    if(path=="login")path="Logowanie",info = "Zaloguj się oraz utwórz post"
    if(path=="admin")path="Admin",info = "Panel administracyjny"

    return `
        <header>
            <div>
                <h1>Witaj, <span>${path}</span></h1>
                <h2>${info}</h2>
            </div>
        </header>
    `;
});

Header.importStyle('./src/components/_styles/Header.css');