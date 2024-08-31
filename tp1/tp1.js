//Rocío Amaya, legajo : 118957/6
//comision 2
//youtube: https://youtu.be/Gb_hXPr_OeY



function preload () {
  foto = loadImage ('data/foto.jpg');
}

function setup() {
  createCanvas(800, 400);
  background(0);
  colorBlanco = color(255);
}


function draw() {
  background(0);
  grillas ( 30, 30 );
  image (foto, -47, 0, 447, 400);
  cambioDeColorF ();
}

function mousePressed() {
  cambioBoolean ();
}

function keyPressed() {
  if (key === '+') {
    tam = tamano (tam, 1);
  } else if (key === '-') {
    tam = tamano (tam, -1);
  } else if (key === 'r') {
    reinicio();
  }
}
