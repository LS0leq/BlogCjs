const Li = new CjsComponent((data)=>{
    const {text,search,active,img} = data;
    const click =(e)=>{
        Search.set(search);
        Li.components.classList.addOnlyRemoveOthers("active", e.component);
        window.location.reload();
    }

    const url = new URLSearchParams(window.location.search);
    let path = url.get('path');
    if(path==data.search){
        path="active";

    }else{
        path="";
    }

    return `
        <li ${onClick(click)} class="${path}">${data.text}<img src="${svg(img)}"></li>
    `;
})
export const TopNav = new CjsComponent((data) => {

    return `
        <div class="top-nav">
            <img src="${png(`logo`)}" alt="Google logo">
        
                <ul>
                    ${Li.render({text: 'Blogi', search: 'blogs',img:'blog'})}
                    ${Li.render({text: 'Kontakt', search: 'contact',img:'message'})}
                    ${Li.render({text: 'Zaloguj się', search: 'login',img:'login'})}
                    ${Li.render({text: 'Panel admina', search: 'admin',img:'admin'})}

                </ul>
        </div>
    `;
});

TopNav.importStyle('./src/components/_styles/TopNav.css');