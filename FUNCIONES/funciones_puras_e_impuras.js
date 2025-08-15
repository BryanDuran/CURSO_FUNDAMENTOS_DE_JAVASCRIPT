// FUNCIONES PURAS

// SIDE EFFECTS
// 1.- Modificar variables globales
// 2.- Modificar parametros
// 3.- Solicitudes HTTP
// 4.- Imprimir mensajes en pantalla o consola
// 5.- Modificar el DOM
// 6.- Obtener la hora actual


/* las funciones puras son más predecibles y fáciles de depurar ya que no tienen efectos secundarios

las funciones impuras pueden ejecutar variables globales pero su predictibilidad es menor

las funciones puras son ideales para procesamiento de datos y lógica sin efectos secundarios, mientras que las funciones impuras se utilizan para tareas que requieren interacción con el entorno externo. */


function sum(a, b) {
    return a + b; // Función pura, no tiene efectos secundarios
}

function sum(a, b) {
    console.log('A: ', a); // funcion impura por el mensaje en consola
    return a + b;
}

let total = 0;

function sumWithSideEffect(a) {
    total += a; 
    return total;
}

function square(a) {
    return a * a; // Función pura, no tiene efectos secundarios
}

function addTen (y){
    return y + 10; // Función pura, no tiene efectos secundarios
}

const number = 5;
const finalResult = addTen(square(number));  // Función pura, apesar de que sea la combinacion de dos funciones puras
console.log(finalResult);

