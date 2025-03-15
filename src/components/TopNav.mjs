const Li = new CjsComponent((data)=>{
    return `
        <li>${data.text}</li>
    `;
})
export const TopNav = new CjsComponent((data) => {

    return `
        <div class="top-nav">
                <ul>
                    ${Li.render({text: 'Blogi'})}
                    ${Li.render({text: 'Kontakt'})}
                </ul>
            <img src="${png(`logo`)}" alt="Google logo">
                <ul>
                    ${Li.render({text: 'Zaloguj się'})}
                    ${Li.render({text: 'Panel admina'})}

                </ul>
        </div>
    `;
});

TopNav.importStyle('./src/components/_styles/TopNav.css');