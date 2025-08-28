// 1. Copying an Array
/* 
El spread operator (...) en JavaScript es una sintaxis que permite expandir los elementos de un array, 
objeto o cadena en lugares donde se esperan múltiples elementos, como en la creación de nuevos arrays, 
objetos o en llamadas a funciones.
 */


const originalArray = [1, 2, 3, 4, 5];
const copiedOfAnArray = [...originalArray]; //Copia los elementos del originalArray en un nuevo array

console.log(originalArray);
console.log(copiedOfAnArray);


// 2. Combining Arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; //Combinas el array1 y array2

console.log(array1);
console.log(array2);
console.log(combinedArray);

//3. Creating Arrays with additional elements

const baseArray = [1, 2, 3];
const additionalElements = [...baseArray, 4, 5, 6]; //Agregas elementos al array baseArray

console.log(baseArray);
console.log(additionalElements);

// 4. Pass elements to functions

function sum(a,b,c){
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers); //Pasa los elementos del array numbers como argumentos individuales a la función
console.log(result);