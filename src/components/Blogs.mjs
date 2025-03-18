import {Button} from "./Button.mjs";

const Box = new CjsComponent((data) => {

    const readMore = (data) => {
        document.getElementById(`${data.id}`).classList.toggle('pop')
    };

    return `
        <div class="box" id="${data.id}" data-category="${data.category}">
            <div class="info">
                <img src="${svg('user')}" alt="User image" class="icon ${data.role}">
                <h1 class="${data.role}">${data.role}</h1>
                <h1 class="${data.category}">Kategoria: ${data.category}</h1>
            </div>
            <div class="rest">
                <img src="${jpg(data.img)}" alt="Blog image">
                
                <h3>${data.title}</h3>
                <p>${data.text}</p>
                ${Button.render({text: 'Przeczytaj więcej',click: ()=>readMore(data)})}
            </div>
        </div>
    `;
});

const Li = new CjsComponent((data) => {


    return `
         <li class="category-item" data-category="${data.category}" onclick="filterCategory('${data.category}')">
            ${data.category}
        </li>
    `;
});

window.filterCategory = (category) => {
    document.querySelectorAll('.box').forEach(box => {
        if (category === 'Wszystkie' || box.dataset.category === category) {
            box.style.display = 'flex';
        } else {
            box.style.display = 'none';
        }
    });
};


export const Blogs = new CjsComponent((data) => {

    return `
        <div class="blogs">
            ${Box.render({id:1,title: 'Artkył', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt ullamcorper erat.',img:'blog', role:'user',category:"IT"})}
            
            ${Box.render({id:2,title: 'Tytułowo', text: 'Cras aliquet, leo quis lacinia placerat, sem risus porttitor quam, nec imperdiet enim sapien at odio. Etiam ornare maximus ligula sed iaculis. Etiam semper dolor.',img:'blog',role:'admin',category:"Programowanie"})}
            ${Box.render({id:3,title: 'Tytułowo', text: 'Cras aliquet, leo quis lacinia placerat, sem risus porttitor quam, nec imperdiet enim sapien at odio. Etiam ornare maximus ligula sed iaculis. Etiam semper dolor.',img:'blog',role:'user',category:"Aplikacje"})}
            ${Box.render({id:4,title: 'Tytułowo', text: 'Cras aliquet, leo quis lacinia placerat, sem risus porttitor quam, nec imperdiet enim sapien at odio. Etiam ornare maximus ligula sed iaculis. Etiam semper dolor.',img:'blog',role:'admin',category:"Aplikacje"})}
            ${Box.render({id:5,title: 'Tytułowo', text: 'Cras aliquet, leo quis lacinia placerat, sem risus porttitor quam, nec imperdiet enim sapien at odio. Etiam ornare maximus ligula sed iaculis. Etiam semper dolor.',img:'blog',role:'user',category:"IT"})}
            <div class="category">
                <h1>Kategorie</h1>
                <ul>
                    ${Li.render({category: 'Wszystkie'})}
                    ${Li.render({category: 'IT'})}
                    ${Li.render({category: 'Programowanie'})}
                    ${Li.render({category: 'Aplikacje'})}
                    ${Li.render({category: 'Inne'})}
                </ul>
            </div>
        </div>
        
        
    `;
});

Blogs.importStyle('./src/components/_styles/Blogs.css');