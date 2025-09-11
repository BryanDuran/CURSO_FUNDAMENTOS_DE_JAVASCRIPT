/* 

this --- class
this --- objeto --- class

En JavaScript, la palabra clave this hace referencia al contexto actual de ejecución, 
es decir, al objeto desde el cual se está llamando una función o método.

Su valor depende de cómo y dónde se utiliza:

En un método de un objeto, this apunta al objeto.
En una función global, this apunta al objeto global (window en navegadores).
En una clase, dentro de los métodos, this apunta a la instancia creada.
En funciones flecha, this no tiene su propio contexto, hereda el del entorno donde fue definida.
Ejemplo:

*/

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}


const Persona1 = new Persona('Bryan', 25);
Persona1.saludar();

Persona1.nuevoMetodo = function() {
    console.log(`Este es un nuevo metodo de ${this.nombre}`);
}

console.log(Persona1.nuevoMetodo());


