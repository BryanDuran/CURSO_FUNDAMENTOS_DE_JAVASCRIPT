/* El ciclo do...while en JavaScript ejecuta un bloque de código al menos una vez y luego repite la ejecución mientras la condición sea verdadera. 
La diferencia principal con while es que la condición se evalúa después de ejecutar el bloque. */


let contador = 0;
do {
  console.log(contador);
  contador++;
} while (contador < 5);
// Imprime: 0, 1, 2, 3, 4



/*     for loop: Usado cuando conoces el número de iteraciones.
    while loop: Usado cuando quieres repetir mientras una condición sea verdadera.
    do...while loop: Similar al while loop, pero se ejecuta al menos una vez.
    for...in loop: Usado para iterar sobre propiedades enumerables de un objeto.
    for...of loop: Usado para iterar sobre elementos de objetos iterables. */
