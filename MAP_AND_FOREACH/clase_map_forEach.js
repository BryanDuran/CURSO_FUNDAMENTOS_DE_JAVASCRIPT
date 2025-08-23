// Transformando con MAP: Permite aplicar una función a cada elemento de un array y construir un nuevo array con los resultados.

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(numbers);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// FOREACH: itera sobre cada elemento de un array y ejecuta ina funcion proporcionada para cada elemento, sin crear un nuevo array.

const colors = ['red', 'green', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color));

console.log(colors);
console.log(iteratedColors);

// Fahrenheit to Celsius conversion
const temperaturesFahrenheit = [32, 68, 95, 104, 212];
const temperaturesCelsius = temperaturesFahrenheit.map( fahrenheit => (5/9) * (fahrenheit - 32));
console.log('Temperatures in Fahrenheit:', temperaturesFahrenheit);
console.log('Temperatures in Celsius:', temperaturesCelsius);

// Sum of element in an array

const newNumbers = [10, 20, 30, 40, 50];
let sum = 0;

newNumbers.forEach(num => {
    sum += num;
})

console.log('Sum of newNumbers:', sum);

