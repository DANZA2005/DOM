const body = document.querySelector("body");
const btnChange = document.querySelector('#btnchange');
const span = document.querySelector("span")

const changeColor = () => {
    let color = '#';
    const letras = '1234567890ABCDEF'
    for(let i = 0; i < 6 ; i++){
        const random = Math.floor(Math.random() * 16);
        color += letras[random];
    }
    body.style.backgroundColor = color;
    span.innerText(color);
    
}

btnChange.addEventListener('click', changeColor);

