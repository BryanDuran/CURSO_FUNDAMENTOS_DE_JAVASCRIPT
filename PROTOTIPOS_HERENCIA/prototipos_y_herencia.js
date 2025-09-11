/* 
METODOS

PROPIEDADES

Prototype 
    metodos
    propiedades
*/

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo
    }
    emitirSonido() {
        console.log(`${this.nombre} hace un sonido.`);
    }
}

class Perro extends Animal { // con extends puedes heredar de los metodos y propiedades de otra clase
    constructor (nombre, tipo, raza){
        super(nombre, tipo); // Super es una palabra reservada para llamar al constructor de la clase padre
        this.raza = raza;
    }
    emitirSonido() {
        console.log(`${this.nombre} hace un ladrido.`);
    }
    correr() {
        console.log(`${this.nombre} está corriendo alegremente.`);
    }

}

const Perro1 = new Perro("Rex", "Canino", "Pastor Alemán");
Perro1.emitirSonido();
Perro1.correr();

Perro1.nuevoMetodo = function() {
    console.log("Este es un nuevo metodo");    
}

Perro.prototype.segundoMetodo = function() {
    console.log("Este es un nuevo metodo 2");    
}









/* Importante!

    Las sub-clases heredan todos los métodos de la clase padre.
    Para heredar las propiedades, nosotros debemos usar la keyword super(). Sin esta no podemos acceder al contexto this.
    En caso no heredemos una propiedad (argumento), este asumirá un valor de undefined.
    Al heredar propiedades con super(), debemos mantener el orden de los argumentos declarados y caso quisiéramos ignorar alguno, le asignamos undefined. */
