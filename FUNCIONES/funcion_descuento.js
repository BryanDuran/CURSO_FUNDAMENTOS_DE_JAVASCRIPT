/* En JavaScript, las funciones son bloques de código reutilizables que realizan una tarea específica. Permiten organizar el código, 
evitar repeticiones y facilitar la lectura y el mantenimiento.

Una función puede recibir parámetros (datos de entrada) y devolver un valor (resultado). Se define con la palabra clave function,
 seguido de un nombre, paréntesis y llaves. */

/*  function saludar(nombre) {
  return "Hola, " + nombre + "!";
}

console.log(saludar("Ana")); // Imprime: Hola, Ana! */

/* function suma(a, b) {
  return a + b;
}

console.log(suma(5, 10)); // Imprime: 15 */

function calculateDiscountPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100;
    const precioWithDiscount = price - discount
    return precioWithDiscount;    
}

const originalPrice = 199;

const discountPercentage = 20;

const finalPrice = calculateDiscountPrice(originalPrice, discountPercentage);
console.log("el precio es: " + originalPrice); 
console.log("descuento aplicado: " + discountPercentage + "%");
console.log("precio con descuento: " + finalPrice);