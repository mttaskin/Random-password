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

    let numbers = [];
    for (let i = 48; i <= 57; i++) {
        const d = String.fromCodePoint(i);
        numbers.push(d);
    };

    const p = lowerCase.concat(upperCase);
   
    // 2 sembol
    for (let i = 0; i < 2; i++) {
        const q = Math.floor(Math.random() * sembol.length);
        password.push(sembol[q]);
    };

    // 1 upperCase
    const w = Math.floor(Math.random() * upperCase.length)
    password.push(upperCase[w]);

    // 1 lowerCase
    const x = Math.floor(Math.random() * lowerCase.length)
    password.push(lowerCase[x]);