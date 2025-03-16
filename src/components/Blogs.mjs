import {Button} from "./Button.mjs";

const Box = new CjsComponent((data) => {
    return `
        <div class="box">
            <img src="${jpg(data.img)}" alt="Blog image">
            <h3>${data.title}</h3>
            <p>${data.text}</p>
            ${Button.render({text: 'Przeczytaj więcej'})}
        </div>
    `;
});

export const Blogs = new CjsComponent((data) => {
    
    return `
        <div class="blogs">
            ${Box.render({title: 'Blog 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt ullamcorper erat.',img:'blog'})}
            
            ${Box.render({title: 'Blog 2', text: 'Cras aliquet, leo quis lacinia placerat, sem risus porttitor quam, nec imperdiet enim sapien at odio. Etiam ornare maximus ligula sed iaculis. Etiam semper dolor.',img:'blog'})}
        </div>
    `;
});

Blogs.importStyle('./src/components/_styles/Blogs.css');