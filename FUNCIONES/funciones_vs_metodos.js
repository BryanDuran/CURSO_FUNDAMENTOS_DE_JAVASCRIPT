//CAPACIDADES QUE TIENEN LAS FUNCIONES IGUAL QUE OTROS OBJETOS

// 1. PASAR FUNCIONES COMO ARGUMENTOS -> callback

/* function a () {
    console.log("Soy la función A");
}

function b() {
    console.log("Soy la función B");
}

b(a); // Aquí pasamos la función A como argumento a la función B
 */
// RETONAR FUNCIONES

/* function a (){
    function b (){}
    return b    
} */

// ASIGNAR FUNCIONES A VARIABLES -> Expresión de función

/* const a = function () {} */

// TENER PROPIEDADES Y METODOS

/* function a () {}
const obj = {}
a.call (obj) */

// ANIDAR FUNCIONES -> Nested functions

/* function a () {
    function b () {
        function c () {
        }
        c()
    }
    b()
}
a()
 */
// ¿ES POSIBLE ALMACENAR FUNCIONES EN OBJETOS? Si es posible.

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('🔥');
        
    }
}

rocket.launchMessage();

