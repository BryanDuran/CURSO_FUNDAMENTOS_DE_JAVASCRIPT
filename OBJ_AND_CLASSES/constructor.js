
/* Una función constructora es una plantilla que te permite crear múltiples objetos similares. Es una función especial que, al usarla junto con la palabra clave new,
   construye nuevos objetos que siguen la misma estructura que defines dentro de la función

   Se utiliza cuando se necesita crear varios objetos con propiedades y comportamientos comunes, se define la estructura dentro de la función y luego creas
    instancias con new 

*/

/* Insights:
    Todas las funciones tienen la propiedad prototype que permiten compartir y/o heredar propiedades y/o métodos.
    Usamos funciones constructoras para instanciar multiples veces diferentes objetos.
    Asignando los propiedades y/o métodos al prototype de la función constructora, aseguramos que las diferentes instancias puedan acceder a ellas.
 */


function Persona(nombre, apellido, edad) { // el this hace referencia al objeto utilizado
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona("Bryan", "Duran", 25);
const persona2 = new Persona("Ana", "Gomez", 30);
const persona3 = new Persona("Carlos", "Lopez", 28);
const persona4 = new Persona("Maria", "Fernandez", 22);

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);

Persona.prototype.telefono = "2282336699"; // puedes añadir una nueva propiedad desde el prototype y acceder desde ella

persona1.nacionalidad = "Mexicana"; // puedes añadir una nueva propiedad desde la instancia y acceder desde ella

Persona.prototype.saludar = function() { // puedes añadir un nuevo método desde el prototype y acceder desde ella
    console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
};

console.log(persona1.saludar());
console.log(persona2.saludar());
console.log(persona3.saludar());
console.log(persona4.saludar());
