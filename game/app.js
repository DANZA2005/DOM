const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const score = document.querySelector('h3');
const highscore = document.querySelector('#maxScore')

let maxScore = 0;
maxScore = localStorage.getItem('maxScore') ;
highscore.innerText = maxScore;

ctx.font = "20px serif"

// const ball = {
//     x: 10,
//     y: 10,
//     show: function () {
//         ctx.font = "30px serif"
//         ctx.fillText('😎', this.x * 10, this.y * 10 + 6);
//         // if(this.on) ctx.fillStyle = 'blue'
//         // else ctx.fillStyle = 'red'
//         // ctx.beginPath()
//         // ctx.arc(this.x * 10, this.y * 10, 10, 0, Math.PI * 2,)
//         // ctx.fill()
//         // this.on = !this.on;
//     }
// }
const snake = [{
    x: 2,
    y: 1,
    show: function () {

        ctx.fillText('😎', this.x * 20, this.y * 20);
    }
},
{
    x: 1,
    y: 1,
    xsig: 2,
    ysig: 1,

    show: function () {

        ctx.fillText('😍', this.x * 20, this.y * 20);
    }
},
{
    x: 0,
    y: 1,
    xsig: 1,
    ysig: 1,
    show: function () {

        ctx.fillText('😂', this.x * 20, this.y * 20);
    }
}



]
const food = {
    x: 0,
    y: 0,
    show: function () {

        ctx.fillText('🎶', this.x * 20, this.y * 20);

    },

    aparece: function () {
        this.x = Math.floor(Math.random() * 29)
        this.y = Math.floor(Math.random() * 19) + 1;

    }


}

function checkEat() {

    let mensaje = 0;

    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.aparece();
        snake.push({ ...snake[1] });
        mensaje = snake.length - 3

        score.innerText = mensaje

        if (mensaje > maxScore) {
            maxScore = mensaje;
            localStorage.setItem('maxScore', maxScore);
            highscore.innerText = maxScore;
        }



    }
}


function checkcolition() {

    for (let i = 2; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            alert("Perdiste")
            location.reload();
            break;
        }
    }

}

function nextMove(x, y) {
    snake.forEach((item, idx) => {
        if (idx === 0) {
            item.x = x
            item.y = y
        } else {
            item.x = item.xsig
            item.y = item.ysig
            item.xsig = snake[idx - 1].x
            item.ysig = snake[idx - 1].y

        }
    })
}

let direction = 1;


let x = 2;
let y = 1;


food.aparece();
setInterval(() => {


    ctx.clearRect(0, 0, 600, 400)
    nextMove(x, y)
    snake.forEach(i => i.show())
    food.show()
    checkEat();
    checkcolition();

    if (direction === 1) x++;
    else if (direction === 2) y++;
    else if (direction === 3) x--;
    else y--;

    if (x > 29) x = 0
    if (x < 0) x = 29
    if (y > 20) y = 1
    if (y < 1) y = 20



}, 100)

document.querySelector('body')
    .addEventListener('keydown', e => {
        // alert(e.key) esto valida la tecla y cambiara la direccion
        if (e.key === 'd' || e.key === 'ArrowRight') direction = 1;
        if (e.key === 's' || e.key === 'ArrowDown') direction = 2;
        if (e.key === 'a' || e.key === 'ArrowLeft') direction = 3;
        if (e.key === 'w' || e.key === 'ArrowUp') direction = 4;

    })