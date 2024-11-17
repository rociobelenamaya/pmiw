//comision 2
//Rocío Belén Amaya, legajo 118957/6
//Renata Bach, legajo 118966/7
//yt: https://youtu.be/uhwWkrV4Xsw

let objJuego; 
let imagenes = ['data/barco.png', 'data/calle.jpg', 'data/cono.png', 'data/finalBueno.jpg', 'data/finalMalo.jpg'];
let sonido;
let pantallas;

function preload () {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i] = loadImage(imagenes[i]);
  }
  soundFormats ('mp3');
  sonido = loadSound("data/choque.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantallas = new Pantallas();
  userStartAudio();
}

function draw() {
  pantallas.dibujar();
}

function keyPressed() {
  if (objJuego && pantallas.estado === "juego") {
    objJuego.teclaPresionada(keyCode);
  }
}

function mousePressed() {

  pantallas.funcionamientoBotones();
}
