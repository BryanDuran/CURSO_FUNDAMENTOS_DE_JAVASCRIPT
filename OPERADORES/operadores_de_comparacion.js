// OPERADORES DE COMPARACION

//Los operadores de comparación en JavaScript se utilizan para comparar dos valores y devolver un resultado booleano (true o false).

    //Igualdad (==):Compara dos valores para ver si son iguales, pero sin tener en cuenta el tipo de datos.
    //Igualdad estricta (===): Compara dos valores para ver si son iguales y del mismo tipo de datos.
    //Desigualdad (!=): Compara dos valores para ver si son diferentes, pero sin tener en cuenta el tipo de datos.
    //Desigualdad estricta (!==): Compara dos valores para ver si son diferentes o de diferentes tipos de datos.
    //Mayor que (>): Verifica si el valor de la izquierda es mayor que el valor de la derecha.

//5 == "5" // true 5 === "5" // false 5 === 5 // true 5 != "5" // false 5 != 6 // true 5 !== "5" // true 5 !== 5 // false 6 > 5 // true 5 > 5 // false 6 >= 5 // true 5 >= 5 // true 4 < 5 // true 5 < 5 // false 4 <= 5 // true 5 <= 5 // true

    //Mayor o igual que (>=): Verifica si el valor de la izquierda es mayor o igual que el valor de la derecha.
    //Menor que (<): Verifica si el valor de la izquierda es menor que el valor de la derecha.
   // Menor o igual que (<=):Verifica si el valor de la izquierda es menor o igual que el valor de la derecha.

   // Conversión de tipos implícita: Los operadores == y != realizan conversiones de tipo implícitas antes de la comparación. Por ejemplo, 5 == "5" es true porque JavaScript convierte la cadena "5" en el número 5 antes de compararlos.


    const a = 10
    const b = 20
    const c = "10"

    a == b // false
    a === c // false 
    a != b // true
    a !== c // true
    a > b // false
    a <= b // true
    a > c // false
