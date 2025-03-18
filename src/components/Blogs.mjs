import {Button} from "./Button.mjs";

const Box = new CjsComponent((data) => {

    const readMore = (data) => {
        document.getElementById(`${data.id}`).classList.toggle('pop')
    };

    return `
        <div class="box" id="${data.id}">
            <div class="info">
                <img src="${svg('user')}" alt="User image" class="icon ${data.role}">
                <h1 class="${data.role}">${data.role}</h1>
            </div>
            <img src="${jpg(data.img)}" alt="Blog image">
            
            <h3>${data.title}</h3>
            <p>${data.text}</p>
            ${Button.render({text: 'Przeczytaj więcej',click: ()=>readMore(data)})}
        </div>
    `;
});



export const Blogs = new CjsComponent((data) => {

    return `
        <div class="blogs">
            ${Box.render({id:1,title: 'Artkył', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt ullamcorper erat.',img:'blog', role:'user'})}
            
            ${Box.render({id:2,title: 'Tytułowo', text: 'Cras aliquet, leo quis lacinia placerat, sem risus porttitor quam, nec imperdiet enim sapien at odio. Etiam ornare maximus ligula sed iaculis. Etiam semper dolor.',img:'blog',role:'admin'})}
            ${Box.render({id:3,title: 'Tytułowo', text: 'Cras aliquet, leo quis lacinia placerat, sem risus porttitor quam, nec imperdiet enim sapien at odio. Etiam ornare maximus ligula sed iaculis. Etiam semper dolor.',img:'blog',role:'user'})}
            ${Box.render({id:4,title: 'Tytułowo', text: 'Cras aliquet, leo quis lacinia placerat, sem risus porttitor quam, nec imperdiet enim sapien at odio. Etiam ornare maximus ligula sed iaculis. Etiam semper dolor.',img:'blog',role:'admin'})}
            ${Box.render({id:5,title: 'Tytułowo', text: 'Cras aliquet, leo quis lacinia placerat, sem risus porttitor quam, nec imperdiet enim sapien at odio. Etiam ornare maximus ligula sed iaculis. Etiam semper dolor.',img:'blog',role:'user'})}
        </div>
    `;
});

Blogs.importStyle('./src/components/_styles/Blogs.css');