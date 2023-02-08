const button = document.querySelector('button')
const text = document.querySelector('.pass')


const passwordClick = () => {
    const password = [];

    const sembol = '!@#$%^&*()\_+~|}{[]:;?><,./-=';

    let upperCase = [];
    for (let i = 65; i <= 90; i++) {
        const b = String.fromCodePoint(i);
        upperCase.push(b);
    };
    
    lowerCase = [];
    for (let i = 97; i <= 122; i++) {
        const c = String.fromCodePoint(i);
        lowerCase.push(c);
    };