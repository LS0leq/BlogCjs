const Li = new CjsComponent((data)=>{

    const {text,search,active} = data;
    const click =(e)=>{
        Search.set(search);
        Li.components.classList.addOnlyRemoveOthers("active", e.component);
    }

    return `
        <li ${onClick(click)} class="${active}">${data.text}</li>
    `;
})
export const TopNav = new CjsComponent((data) => {

    return `
        <div class="top-nav">
                <ul>
                    ${Li.render({text: 'Blogi', active: "active", search: 'blogs'})}
                    ${Li.render({text: 'Kontakt', search: 'contact'})}
                </ul>
            <img src="${png(`logo`)}" alt="Google logo">
                <ul>
                    ${Li.render({text: 'Zaloguj się', search: 'login'})}
                    ${Li.render({text: 'Panel admina', search: 'admin'})}

                </ul>
        </div>
    `;
});

TopNav.importStyle('./src/components/_styles/TopNav.css');