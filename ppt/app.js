const images = document.querySelectorAll ('.images img');
const imgUser = document.querySelector('#choiceUser')
const imgCom = document.querySelector('#choiceCom')

const getChoiceUser = (e) => {
    const image = e.target;
    const choiceUser = image.getAttribute('data-id');
    const imageUser = image.src; // se elige una propiedad en este caso ya esta creada si es una que creamos es con un punto y si no es con ('')
    imgUser.src = imageUser;
    play(choiceUser)
}

const play = choiceUser => {
    
    const choiceUser = image.getAttribute('data-id');
    const choices = ['piedra', 'papel', 'tijeras'];

    const choiceCom = choices[Math.floor(Math.random() * 3)];
    let choiceimg = () => {
        return scr
    }
}

images.forEach(image => image.addEventListener('click', getChoiceUser));

