export const Button = new CjsComponent((data) => {

    return `
        <button>
            ${data.text}
        </button>
    `;
});

Button.importStyle('./src/components/_styles/Button.css');