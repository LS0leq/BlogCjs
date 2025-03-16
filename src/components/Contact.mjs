import {Button} from "./Button.mjs";
import {Input} from "./Input.mjs";

export const Contact = new CjsComponent((data) => {
    
    return `
        <div class="contact">
            <h1>Skontaktuj się z nami</h1>
            <p>Spytaj nas o wszystko, odpowiemy na wszystko!</p>
            <form>
                ${Input.render({type: 'text', placeholder: 'Imię'})}
                ${Input.render({type: 'email', placeholder: 'Email'})}
                ${Input.render({type: 'text', placeholder: 'Wiadomość'})}
                ${Button.render({text: 'Wyślij'})}
            </form>
        </div>
    `;
});

Contact.importStyle('./src/components/_styles/Contact.css');