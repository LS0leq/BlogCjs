export const Main = new CjsComponent((data) => {
    const token = localStorage.getItem('template')
    if(!token){
        Search.set('login');
        alert('Musisz być zalogowany jako administrator aby zobaczyć tą stronę');
        location.reload();
    }

    return `
        <main>
            Main component works!
        </main>
    `;
});

Main.importStyle('./src/components/_styles/Main.css');