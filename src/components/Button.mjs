export const Button = new CjsComponent((data) => {
    const { text, click } = data;

    return `
        <button ${onClick(click)}>
            ${text}
        </button>
    `;
});

Button.setDefaultData({
    text: "Example text",
    click: () => {}
});

Button.importStyle('./src/components/_styles/Button.css');