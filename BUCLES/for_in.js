/* El ciclo for...in en JavaScript se utiliza para iterar sobre las propiedades enumerables de un objeto. 
En cada iteración, el ciclo devuelve el nombre (clave) de una propiedad del objeto. */

/* const persona = { nombre: "Ana", edad: 25, ciudad: "Madrid" };

for (let clave in persona) {
  console.log(clave);         // nombre, edad, ciudad
  console.log(persona[clave]); // Ana, 25, Madrid
} */

  const listaDeCompras = { manzana: 3, pera: 2, naranja: 5 };

  for (let fruta in listaDeCompras) {
    console.log(fruta);               // manzana, pera, naranja
    console.log(listaDeCompras[fruta]); // 3, 2, 5
  }

  for (fruta in listaDeCompras) {
    console.log(`La cantidad de ${fruta} es ${listaDeCompras[fruta]}`);
  }
  
/* 
  for (fruta of listaDeCompras){ // esto no es iterable
    console.log(`La cantidad de ${fruta} es ${listaDeCompras[fruta]}`);
  } */

