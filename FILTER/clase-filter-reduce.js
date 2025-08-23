// Methods that iterate over an array 
//  Methods that do not modify the original array (Inmutability)

// FILTER: Crea un nuevo array con elementos que cumplan una condicion dada por una función

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// REDUCE: Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un unico valor

// case 1
let accumulator = 0;
const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(numbersReduce);
console.log(sum);

// case 2

const words = ['banana', 'apple', 'hello', 'bye', 'banana', 'bye']

const wordFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]){
    accumulator[currentValue]++;
  } else{
    accumulator[currentValue] = 1;
  } 

  return accumulator
},{})

console.log(wordFrecuency);



