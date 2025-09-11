/*  Sincronismo: Las instrucciones se ejecutan una tras otra, esperando a que cada una termine antes de pasar a la siguiente. 
El flujo es lineal y bloqueante.   Ejemplo:

console.log("A");
console.log("B");
console.log("C");
// Salida: A B C

- Asincronismo: Permite ejecutar tareas que pueden tardar (como peticiones a servidores, temporizadores, etc.) 
sin bloquear el flujo principal. El código sigue ejecutándose y la tarea asincrónica se resuelve después, usando callbacks,
 promesas o async/await.   Ejemplo:

 console.log("A");
setTimeout(() => {
  console.log("B");
}, 1000);
console.log("C");
// Salida: A C B


Proceso:

   1.  El JavaScript Engine ejecuta el código desde la Call Stack (pila de llamadas).
   2. Cuando una operación asíncrona se encuentra (como una solicitud de red), se envía al Web APIs del navegador o a Node APIs en Node.js.
   3. Una vez que la operación asíncrona se completa, su callback se envía a la Task Queue (cola de tareas).
   4. El Event Loop verifica la Call Stack y, si está vacía, mueve el callback de la Task Queue a la Call Stack para su ejecución.


-------------------------------------------------------------------------------------------------------------------------------------------------


 1. Call Stack (Pila de llamadas): Es donde se ejecutan las funciones de manera sincronizada, una encima de otra.
  Cuando una función termina, se elimina de la pila.

2. Web APIs: Son funciones proporcionadas por el navegador (como setTimeout, fetch, DOM events) que permiten ejecutar
 tareas asincrónicas fuera del call stack.

3. Queue (Cola de tareas): Cuando una tarea asincrónica termina en la Web API, su callback se coloca en la cola de tareas (task queue).

4. Event Loop: Es el mecanismo que revisa constantemente si el call stack está vacío. Si lo está, toma la primera tarea
 de la cola y la ejecuta en el call stack.

5. Output: Es el resultado que ves en la consola o en la interfaz, dependiendo de lo que haga tu código.

Ejemplo visual:  


console.log("A"); // Call Stack
setTimeout(() => { // Web API
  console.log("B"); // Queue -> Call Stack
}, 1000);
console.log("C"); // Call Stack

*/