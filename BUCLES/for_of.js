/* El ciclo for...of es una estructura de bucle en JavaScript que permite recorrer de manera sencilla los elementos de objetos iterables,
 como arrays, cadenas de texto, mapas, conjuntos, etc. A diferencia de for...in, que recorre las propiedades enumerables de un objeto, 
 for...of recorre directamente los valores de los elementos.
 */

/* const numeros = [1, 2, 3, 4];
for (const numero of numeros) {
  console.log(numero);
} */
// Salida: 1, 2, 3, 4

let canasta = ['manzana', 'banana', 'naranja'];
for (const fruta of canasta) { // por cada fruta de la canasta
  console.log(fruta);
}
// Salida: manzana, banana, naranja