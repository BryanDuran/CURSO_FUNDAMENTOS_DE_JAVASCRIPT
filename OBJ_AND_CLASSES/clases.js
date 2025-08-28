/* En JavaScript, una clase es una plantilla para crear objetos con propiedades y métodos definidos. 
Las clases permiten estructurar el código de manera más organizada y reutilizable, siguiendo el paradigma
 de la programación orientada a objetos.

Se definen usando la palabra clave class y pueden tener un constructor y métodos. */

class Persona { // Nueva sintaxis
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
    }
}

const Persona1 = new Persona("Bryan", "Duran", 25);
const Persona2 = new Persona("Ana", "Gomez", 30);
const Persona3 = new Persona("Carlos", "Lopez", 28);
const Persona4 = new Persona("Maria", "Fernandez", 22);

Persona1.saludar(); // Hola, soy Bryan Duran y tengo 25 años.
Persona2.saludar(); // Hola, soy Ana Gomez y tengo 30 años.
Persona3.saludar(); // Hola, soy Carlos Lopez y tengo 28 años.
Persona4.saludar(); // Hola, soy Maria Fernandez y tengo 22 años.
