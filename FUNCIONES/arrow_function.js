// funcion tradicional
/* function suma(a, b) {
  return a + b;
}
 */
// arrow function
const suma = (a, b) => a + b;

// ejemplo

const greeting = function (name){
    return `Hi ${name}`
}

// Arrow function
const newGreeting =  (name) => {
    return `Hi ${name}`
}

// Arrow function - implicit return
const newGreetingImplicit =  (name) => `Hi ${name}`
const newGreetingImplicitTwoParameters =  (name, age) => `Hi ${name}, you are ${age} years old`;

// Lexical Binding

const finctionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} says: ${message}`);
    },
    messageWithArrowFunction: (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}

finctionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility');
finctionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus');



/* Las Arrow Function son útiles porque permiten:

    Escribir métodos más concisos
    Simplificar una línea de código para que sea más legible
    Aprovechar las características de retorno implícito y el no uso de paréntesis
    Olvidarse de manejar el contexto this
    Definir de manera compacta una función convencional
    Eliminar las llaves y la palabra return si la función tiene solamente una sentencia que devuelve un valor
    Reducir el código aún más utilizando parámetros */
