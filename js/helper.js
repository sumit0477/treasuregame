/*
    Javascript sintaxis tradicional

    function getRandomNumber(limit) {

    }

*/

// Funcion con ECMA6

// Funcion para generar un numero aleatorio y redondear hacia abajo
// Con un maximo dado por size
let getRandomNumber = (size) => {
  return Math.floor(Math.random() * size);
};

// Funcion que obtiene la distancia entre dos puntos
// e = al evento de un click y target = al objetivo a encontrar
// Para hallar la distancia se utiliza el teorema de pitagoras
// Finalmente la funcion retorna la hipotenusa (distancia)
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
};

// Funcion que retorna una pista segun la distancia entre los puntos
/*
	Los valores numericos de esta funcion deberian ir en porcentajes
	añadiendo una funcionalidad universal con cualquier imagen y no
	con tan solo las de 400 pixeles.
*/
let getDistanceHint = (distance) => {
  if (distance < 30) {
    return "Boiling Hot";
  } else if (distance < 40) {
    return "Really Hot";
  } else if (distance < 60) {
    return "Hot";
  } else if (distance < 100) {
    return "Warm";
  } else if (distance < 180) {
    return "Cold";
  } else if (distance < 360) {
    return "Really Cold";
  } else {
    return "Freeze";
  }
};
