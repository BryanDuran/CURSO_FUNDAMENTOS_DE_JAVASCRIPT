/* Métodos mutables: copyWithin, fill, pop, push, reverse, shift, sort, splice, unshift.

Métodos no mutables: slice, concat, toReversed, slice, toSorted, toSliced. */

const fruits = Array('Apple', 'Banana', 'Cherry');

fruits.push('Orange'); // Añade 'Orange' al final del array
console.log(fruits);

fruits.pop(); // Elimina el último elemento del array
console.log(fruits);

fruits.unshift('Mango', 'Pineapple'); // Añade 'Mango' y 'Pineapple' al inicio del array
console.log(fruits);

const newFruits = fruits.concat(['Kiwi', 'Sandalwood', 'Banana']); // Crea una copia superficial del array
console.log(fruits);
console.log(newFruits);

// CHECKING ARRAYS WITH ARRAY.ISARRAY ()
 const isArray = Array.isArray(fruits);
 console.log(isArray); // true

// Practical exercise: sum all elements in an array
const numbersArray = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
}

console.log(sum);
