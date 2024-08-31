let tam = 51;
let espacio = 15;
let tiempoDeColor = 0;
let mov;
let cambioDeColorV=false;
let posX;
let posY;
let colorBlanco;
let nuevoTamano;


function grillas (filas, columnas) {
  //repetición de las filas
  for (let y = 0; y < filas; y++) {
    //espacio en X de cada cuadrado
    if ((y / 2) % 2 === 0) {
      mov = (y % 2) * espacio;
    } else {
      mov = espacio * (2 - (y % 2));
    }


    for (let i = 0; i < columnas; i++) {
      posX = mouseX / 4 + i * tam + mov;
      posY = y * tam;


      strokeWeight(3);
      stroke(130, 130, 130);

      if (i % 2 === 0) {
        if (cambioDeColorV) {
          fill(colorBlanco);
        } else {
          fill(255);
        }
      } else {
        fill(0);
      }

      rect(posX, posY, tam, tam);
    }
  }
}




function cambioDeColorF() {
  if (cambioDeColorV && frameCount - tiempoDeColor >= 15) {
    tiempoDeColor = frameCount;
    colorBlanco = color(random(100, 255), random(100, 255), random(100, 255));
  }
}

function cambioBoolean () {
  if (cambioDeColorV) {
    cambioDeColorV = false;
    colorBlanco = color(255);
  } else {
    cambioDeColorV = true;
    tiempoDeColor = frameCount;
  }
}


function tamano (tamanoActual, aumento) {
  nuevoTamano = tamanoActual + aumento;
  if (nuevoTamano > 57) {
    nuevoTamano = 57;
  } else if (nuevoTamano < 27) {
    nuevoTamano = 27;
  }
  return nuevoTamano;
}



function reinicio() {
  tam = 51;
  colorBlanco = color(255);
  cambioDeColorV = false;
}
