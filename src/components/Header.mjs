export const Header = new CjsComponent((data) => {
    const url = new URLSearchParams(window.location.search);
    let path = url.get('path');
    let info;

    if(path=="blogs")path="Blogi",info = "Przeglądasz najnowsze posty z blogu informatycznego"
    else if(path=="contact")path="Kontakt",info = "Skontaktuj się z nami"
    else if(path=="login")path="Logowanie",info = "Zaloguj się oraz utwórz post"
    else if(path=="admin")path="Admin",info = "Panel administracyjny"
    else path = "Error404", info = "Nie znaleziono strony"

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