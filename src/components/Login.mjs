import {Input} from "./Input.mjs";
import {Button} from "./Button.mjs";

export const Login = new CjsComponent((data) => {
    
    return `
        <div class="login">
            <h1>Logowanie</h1>
            <p>Jeśli nie masz konta skontaktuj się z administracją.</p>
            <form>
                ${Input.render({type: 'email', placeholder: 'Email'})}
                ${Input.render({type: 'password', placeholder: 'Hasło'})}
                ${Button.render({text: 'Wyślij'})}
            </form>
        </div>
    `;
});

Login.importStyle('./src/components/_styles/Login.css');