// How to create an Array ?

// 1. new Array () or Array ()

/* En JavaScript, los arrays (arreglos) son estructuras de datos que permiten almacenar múltiples valores en una sola variable.
 Cada valor dentro de un array se llama elemento y está asociado a un índice numérico, comenzando desde 0. Los arrays pueden 
 contener cualquier tipo de dato: números, cadenas, objetos, incluso otros arrays. */

const fruits = Array ('Apple', 'Banana', 'Cherry');
console.log(fruits);

const justOneNumber = Array(42); // vacio
console.log(justOneNumber);

const numbers = Array(1, 2, 3, 4, 5);
console.log(numbers);

// 2. Array literal Sintax

const oneNumber = [4];
console.log(oneNumber); 

const emptyArray = [];
console.log(emptyArray);

const sports = ['Soccer', 'Basketball', 'Tennis'];
console.log(sports);

const recipeIngredients = ['Flour', true, 52, {ingredient : 'Sugar', quantity: '100g'}, false]; // Array Mixto
console.log(recipeIngredients);

// Accessing elements

const apple = fruits[0];
console.log(apple);

const ingredient = recipeIngredients[3];
console.log(ingredient);

// length property

console.log(fruits.length);
console.log(recipeIngredients.length);
