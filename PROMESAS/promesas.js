/* En JavaScript, una promesa (Promise) es un objeto que representa la eventual finalización (o fallo) de una operación asincrónica 
y su valor resultante.

Las promesas tienen tres estados: 
- Pendiente (pending): La operación aún no ha terminado. 
- Cumplida (fulfilled): La operación terminó exitosamente.
- Rechazada (rejected): La operación falló.

Se usan para manejar código asincrónico de forma más clara que los callbacks.


*/

/* resolve() // cuando la promesa se resuelve de forma satisfactoria
reject() // cuando la promesa se rechaza o falla */

/* 
then() // para manejar el resultado exitoso de la promesa
catch() // para manejar errores o rechazos de la promesa
finally() // para ejecutar código independientemente del resultado de la promesa */

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationSuccessful = true;    

        if (operationSuccessful) {
            resolve("¡Operación exitosa!");
        } else {
            reject("¡Hubo un error en la operación!");
        }
    }, 2000);
});

promesa
    .then((successMessage) => {
        console.log(successMessage); // Maneja el resultado exitoso
    })
    .catch((error) => {
        console.error(error); // Maneja el error
    })
    .finally(() => {
        console.log("La promesa ha finalizado."); // Se ejecuta siempre
    });