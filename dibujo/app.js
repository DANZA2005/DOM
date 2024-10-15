const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
//esto crea un oayaso asi todo feo XD
// ctx.fillRect(50,50,100,50)
// ctx.fillRect(450,50,100,50)
// ctx.fillRect(50,250,500,100)

// ctx.fillStyle = 'red';
// ctx.arc(300,175,50,0 ,Math.PI * 2, true)
// ctx.fill();

// ctx.fillStyle = 'white';
// ctx.fillRect(100,300,50,50)
// ctx.fillRect(250,300,50,50)
// ctx.fillRect(400,300,50,50)

ctx.fillStyle = 'green';
ctx.roundRect(250,100,100,150,10 );
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.roundRect(250,100,100,20,10);
ctx.fill();

ctx.beginPath();


ctx.beginPath();
ctx.fillStyle = 'white'
ctx.arc(280,140,10,0,Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(320,140,10,0,Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(300,150)
ctx.lineTo(310,180)
ctx.lineTo(290,180)
ctx.fill();

ctx.beginPath();
ctx.roundRect(270,200,60,20,10)
ctx.fill();

ctx.fillStyle = 'yellow';
ctx.beginPath();
ctx.moveTo(280,200);
ctx.lineTo(300,200);
ctx.lineTo(290,210);
ctx.fill();

ctx.beginPath();
ctx.moveTo(300,200);
ctx.lineTo(320,200);
ctx.lineTo(310,210);
ctx.fill();












