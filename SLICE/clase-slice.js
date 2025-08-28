// slice ()


/* El método slice() en JavaScript es una función utilizada en arrays y cadenas para obtener una copia superficial de una parte del array o string, sin modificar el original.

En arrays:

slice(inicio, fin) devuelve un nuevo array con los elementos desde el índice inicio hasta fin (sin incluir fin).
Si no se especifica fin, toma hasta el final del array.
 */



const animals = ['lion', 'tiger', 'bear', 'elephant', 'giraffe'];

console.log(animals.slice(2));
console.log(animals.slice(2,4));
console.log(animals.slice(1,6));
console.log(animals.slice(-2));
console.log(animals.slice(2, -1));
console.log(animals.slice());






