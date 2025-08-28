/*
objetos: son una estructura de datos que permite almacenar colecciones de datos y funcionalidades relacionadas en forma de pares clave-valor.

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor
}


¿Qué es un objeto en JavaScript?

Un objeto en JavaScript es una colección de propiedades. Cada propiedad tiene un nombre (llamado clave) y un valor asociado.
 Los valores pueden ser de cualquier tipo, incluyendo otros objetos, funciones, arreglos, etc.

Un objeto es como una "caja" donde puedes guardar diferentes valores relacionados entre sí. Es muy útil cuando tienes muchos 
datos que pertenecen a una misma entidad.

*/

const persona = {
    nombre: "Juan",
    edad: 30,
    direccion: {
        calle: "Gran Via",
        numero: 100,
        ciudad: "Madrid"
    },
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

const automovil = {
    marca: "Nissan",
    modelo: "NP300",
    año: 2020
}

console.log(persona);
console.log(automovil);