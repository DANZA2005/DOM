const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
//cara del mono este
ctx.beginPath();
ctx.fillStyle = '#fdddca'
ctx.arc(300,200,150,0,Math.PI * 2, true);
ctx.lineWidth = 3;
ctx.stroke();
ctx.fill();

//cabeza 
ctx.beginPath();
ctx.fillStyle = '#78582d'
ctx.ellipse(300,190,149,140,Math.PI,0,Math.PI,false)
ctx.fill();


ctx.beginPath();
ctx.moveTo(150,190);
ctx.lineTo(175,190);
ctx.lineTo(162.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(175,190);
ctx.lineTo(200,190);
ctx.lineTo(187.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(200,190);
ctx.lineTo(225,190);
ctx.lineTo(212.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(225,190);
ctx.lineTo(250,190);
ctx.lineTo(237.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(250,190);
ctx.lineTo(275,190);
ctx.lineTo(262.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(275,190);
ctx.lineTo(300,190);
ctx.lineTo(287.5,200);
ctx.fill();
    
ctx.beginPath();
ctx.moveTo(300,190);
ctx.lineTo(325,190);
ctx.lineTo(312.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(325,190);
ctx.lineTo(350,190);
ctx.lineTo(337.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(350,190);
ctx.lineTo(375,190);
ctx.lineTo(362.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(375,190);
ctx.lineTo(400,190);
ctx.lineTo(387.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(400,190);
ctx.lineTo(425,190);
ctx.lineTo(412.5,200);
ctx.fill();

ctx.beginPath();
ctx.moveTo(425,190);
ctx.lineTo(450,190);
ctx.lineTo(437.5,200);
ctx.fill();

// ojos 
ctx.beginPath();
ctx.fillStyle = 'white'
ctx.ellipse(230,250,20,40,Math.PI,0,Math.PI  ,false)
ctx.lineWidth = 8;
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.ellipse(230,250,20,10,Math.PI,0,Math.PI  ,true)
ctx.fill();

ctx.beginPath();
ctx.ellipse(360,250,20,40,Math.PI,0,Math.PI  ,false)
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.ellipse(360,250,20,10,Math.PI,0,Math.PI  ,true)
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black'
ctx.ellipse(234,230,13,20,Math.PI,0,Math.PI *2 ,false)
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black'
ctx.ellipse(364,230,13,20,Math.PI,0,Math.PI *2 ,false)
ctx.fill();

//nariz 

ctx.beginPath();
ctx.fillStyle = '#ffa226'
ctx.moveTo(295,240);
ctx.lineTo(295,270);
ctx.lineTo(280,270);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = '#f26645'
ctx.moveTo(295,240);
ctx.lineTo(295,270);
ctx.lineTo(310,270);
ctx.fill();

// boca

ctx.beginPath();
ctx.beginPath();
ctx.moveTo(260, 280);
ctx.bezierCurveTo(270, 310, 325, 310, 335, 280);
ctx.strokeStyle = '#b88e4d'
ctx.lineWidth = 3.5;
ctx.stroke();

// orejas 

ctx.beginPath();
ctx.beginPath();
ctx.fillStyle = '#fdddca'
ctx.moveTo(150, 180);
ctx.bezierCurveTo(100, 150, 100, 280, 156, 240);
ctx.strokeStyle = 'black'
ctx.lineWidth = 3.5;
ctx.fill()
ctx.stroke();

ctx.beginPath();
ctx.beginPath();
ctx.fillStyle = '#fdddca'
ctx.moveTo(450, 180);
ctx.bezierCurveTo(500, 150, 500, 280, 444, 240);
ctx.strokeStyle = 'black'
ctx.lineWidth = 3.5;
ctx.fill()
ctx.stroke();

// timpanos 

ctx.beginPath();
ctx.fillStyle = '#eca880'
ctx.ellipse(138,215,13,20,Math.PI,0,Math.PI *2 ,false)
ctx.fill();

ctx.beginPath();
ctx.fillStyle = '#eca880'
ctx.ellipse(462,215,13,20,Math.PI,0,Math.PI *2 ,false)
ctx.fill();
