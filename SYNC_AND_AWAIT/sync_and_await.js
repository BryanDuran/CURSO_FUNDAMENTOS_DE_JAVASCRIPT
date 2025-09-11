/* En JavaScript, async y await son palabras clave que facilitan el manejo de código asincrónico usando promesas, 
permitiendo escribirlo de forma más sencilla y parecida al código síncrono.

- async se usa para declarar una función que siempre devuelve una promesa. 
- await se usa dentro de funciones async para esperar a que una promesa se resuelva antes de continuar con la siguiente línea. 


*/


 async function fetchData(nombre) {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const datos = await respuesta.json();

        // Habilidades
        const habilidades = datos.abilities.map(ability => ability.ability.name);

        // Tipos
        const tipos = datos.types.map(tipo => tipo.type.name);

        //debilidades (damage_relations) del primer tipo
        const tipoPrincipal = datos.types[0].type.name;
        const tipoRespuesta = await fetch(`https://pokeapi.co/api/v2/type/${tipoPrincipal}`);
        const tipoDatos = await tipoRespuesta.json();
        const debilidades = tipoDatos.damage_relations.double_damage_from.map(tipo => tipo.name);

        console.log("Nombre:", datos.name);
        console.log("Altura:", datos.height);
        console.log("Peso:", datos.weight);
        console.log("Habilidades:", habilidades.join(", "));
        console.log("Tipos:", tipos.join(", "));
        console.log("Debilidades:", debilidades.join(", "));


    } catch (error) {
        console.log("Error al obtener el Pokémon:", error);
    }
}

fetchData("charizard"); 


/* Con varias urls, por si queremos llamar mas de una promesa */
const urls = [
    'https://pokeapi.co/api/v2/pokemon/pikachu',
    'https://pokeapi.co/api/v2/pokemon/bulbasaur',
    'https://pokeapi.co/api/v2/pokemon/squirtle',
    'https://pokeapi.co/api/v2/pokemon/charizard',
    'https://pokeapi.co/api/v2/pokemon/mewtwo',
    'https://pokeapi.co/api/v2/pokemon/eevee',
    'https://pokeapi.co/api/v2/pokemon/snorlax',
    'https://pokeapi.co/api/v2/pokemon/jigglypuff',
    'https://pokeapi.co/api/v2/pokemon/gengar',
    'https://pokeapi.co/api/v2/pokemon/dragonite'
];

async function fetchNewData() {
    try {
        for await (let url of urls) {
            const respuestas = await fetch(url)
            let data = await respuestas.json()
            console.log(data.name)
            console.log(data.height)
            console.log(data.weight)
            console.log("-----")
            console.log("Habilidades:", data.abilities.map(ability => ability.ability.name).join(", "))
            console.log("Tipos:", data.types.map(type => type.type.name).join(", "))
            console.log("Debilidades:", data.types[0].type.name)
        }
    } catch (error) {
        console.log("Error al obtener los Pokémon:", error);
    }
}

fetchNewData();