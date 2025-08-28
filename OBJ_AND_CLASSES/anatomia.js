/* Estructura de dato

    KEY / VALUE

    objeto {
        propiedad: valor,
        propiedad: valor,
        propiedad: valor

        metodos (){
            // Definición de métodos
        }
    }
*/

const persona = {
    nombre : "Bryan",
    edad: 25,
    direccion: {
        calle: "Ursulo Galvan",
        numero: 123,
        ciudad: "Springfield"
    },
    saludar() {
        console.log(`Hola, mi nombre es ${persona.nombre} y tengo ${persona.edad} años. y vivo en ${persona.direccion.calle}, ${persona.direccion.numero}, ${persona.direccion.ciudad}`);
    }
}

persona.telefono = "555-1234"; // como agregar propiedades al objeto

persona.despedir = function() { // como agregar métodos al objeto
    console.log(`Adiós`);
}

delete persona.telefono; // como eliminar una propiedad de un objeto

delete persona.despedir; // como eliminar un método de un objeto

console.log(persona);

/* persona.saludar();
persona.despedir(); */
