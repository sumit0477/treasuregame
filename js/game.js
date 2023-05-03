// Alerta para probar
// alert("works!");

// Constantes que representan los valores de la imagen
const WIDTH = 400;
const HEIGTH = 400;

// Variable del tesoro a encontrar
// Utilizando la funcion de getRandomNumber
// Con el maximo de los valores de la imagen
let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGTH),
};
// Console.log() para mostrar donde esta el tesoro por consola
//console.log(target);

// Elemento de la imagen en el html
let $map = document.getElementById("Map");

// Elemento del parrafo en el html
let $distance = document.getElementById("distance");

// Contador de clicks
let clicks = 0;

// Listener del evento click con la funcion a ejecutar
$map.addEventListener("click", function (e) {
  // Aumenta el contador con cada click
  clicks++;

  // Variable con la funcion de getDistance
  // e viene dado por el evento del click y trae todos sus detalles como (x,y)
  // target es la variable a encontrar declarada anteriormente
  let distance = getDistance(e, target);

  // Variable con getDistanceHint para dar una pista segun la distancia
  let distanceHint = getDistanceHint(distance);

  // La pista se inserta en el html con inner en el elemento del parrafo
  // Se inserta este valor con un h1 gracias a los `` (backtics) de ECMA6
  $distance.innerHTML = `<h5>Clue: ${distanceHint}</h5>`;

  // Por ultimo, si la distancia esta muy cerca del tesoro se ejecuta una alerta
  if (clicks < 20) {
    if (distance < 20) {
      location.replace("popup1.html");
    }
  } else {
    location.replace("popup.html");
  }
});
