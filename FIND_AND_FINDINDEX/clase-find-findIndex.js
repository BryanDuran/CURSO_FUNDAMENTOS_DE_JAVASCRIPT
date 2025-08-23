// Methods that iterate over an array
// Methods that DO NOT modify the original array (inmutability)

// FIND
// Devuelve el valor del primer elemento del array que cumple la funcion de prueba proporcionada

const multipleOf5 = [5, 10, 15, 20, 25];

const firstNumberGreaterThan10 = multipleOf5.find(number => number > 10);

console.log(multipleOf5);
console.log(firstNumberGreaterThan10);

// FIND INDEX
// Devuelve el indice del primer elemento en un array que satisface una condicion proporcionada en forma de función. Si no encuentra ningún elemento que cumpla la condición, devuelve -1.


const randomNumbers = [6,14,27,56,40];

const indexNumber = randomNumbers.findIndex(number => number > 50);

console.log(randomNumbers);
console.log(indexNumber );

