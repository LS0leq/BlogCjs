export const Input = new CjsComponent((data) => {
    
    return `
        <input type="${data.type}" placeholder="${data.placeholder}">
    `;
});

Input.importStyle('./src/components/_styles/Input.css');